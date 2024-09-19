const db = require("../config/db.config");
const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");

const coordinatorLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [coordinatorResult] = await db.query(
      "SELECT * FROM event_incharge WHERE contact = ? AND password = ?",
      [phone_number, password]
    );

    if (coordinatorResult.length === 0) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    // Get the event
    const event_name = coordinatorResult[0].event;

    const [result] = await db.query(
      'SELECT er.TEAM_ID, er.TEAM_NAME, er.EVENT_NAME, er.DEPARTMENT, er.NO_OF_MEMBERS, er.TL_MAIL, er.TL_contact, er.fee, md.MEMBERS_NAME, md.DEPARTMENT, md.REGISTER_NO, md.YEAR_OF_STUDY FROM event_registrations er JOIN member_details md ON er.TEAM_ID = md.TEAM_ID WHERE er.EVENT_NAME = ? AND er.PAYMENT_STATUS = 1;',
      [event_name]
    );

    // initialize the teamMap 
    const teamsMap = {};

    // fill the teamMap with entries 
    result.forEach((row) => {
      // fetch the fields from the row
      const {
        TEAM_ID,
        TEAM_NAME,
        EVENT_NAME,
        TEAM_DEPARTMENT,
        NO_OF_MEMBERS,
        TL_MAIL,
        TL_contact,
        fee,
        MEMBERS_NAME,
        REGISTER_NO,
        YEAR_OF_STUDY
      } = row;

      // if the teamsMap doesnt contain the team then add the team inside it 
      if(!teamsMap[TEAM_ID]){
        teamsMap[TEAM_ID] = {
          TEAM_ID,
          TEAM_NAME,
          EVENT_NAME,
          TEAM_DEPARTMENT,
          NO_OF_MEMBERS,
          TL_MAIL,
          TL_contact,
          fee,
          members: [] // Initialize members array
        };
      }

      // now add the team members inside the members array of teamsMap 
      teamsMap[TEAM_ID].members.push(
        {
          MEMBERS_NAME,
          REGISTER_NO,
          YEAR_OF_STUDY
        }
      );
    });

    const teams = Object.values(teamsMap);

    res.status(200).json({ teams, event_name });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

//To download the team data in excel format
const download = async (req, res, next) => {
  console.log("checking");
  const { event } = req.body;
  try {
    const [data] = await db.query(
      "SELECT e.TEAM_ID,e.TEAM_NAME,e.EVENT_NAME,e.NO_OF_MEMBERS,e.TL_MAIL,e.PAYMENT_STATUS,e.TL_CONTACT,m.MEMBERS_NAME,m.REGISTER_NO,m.YEAR_OF_STUDY,m.DEPARTMENT FROM event_registrations e INNER JOIN member_details m ON e.TEAM_ID = m.TEAM_ID WHERE e.PAYMENT_STATUS = 1 AND e.EVENT_NAME = ?",
      [event]
    );

    console.log(data);

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(400).send("Invalid or no data provided");
    }

    //Convert JSON to CSV manually
    const csv = convertJSONToCSV(data);
    console.log("CSV created manually");
    console.log(csv);

    req.csvData = csv;
    req.eventName = event;

    next();
  } catch (error) {
    console.error("Error while converting to CSV:", error);
    res.status(500).send("Failed to convert data to CSV");
  }
};

//CSV to Excel conversion
const linkdownload = async (req, res) => {
  try {
    const { csvData , eventName } = req;
    if (!csvData) {
      return res.status(400).send("No CSV data available");
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    const rows = csvData.split("\n").map((row) => row.split(","));

    rows.forEach((row) => {
      worksheet.addRow(row);
    });

    const filePath = path.join(__dirname, `${eventName}.xlsx`);

    await workbook.xlsx.writeFile(filePath);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${eventName}.xlsx"`);
    
    await workbook.xlsx.write(res);

    res.end();

    setTimeout(() => {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Could not delete file: ${err.message}`);
        } else {
          console.log("Deleted the file after download.");
        }
      });
    }, 30000);
  } catch (error) {
    console.error("Error while converting CSV to Excel:", error);
    res.status(500).send("Failed to convert CSV to Excel");
  }
};

const convertJSONToCSV = (data) => {
  const flattenObject = (obj, parent = "", res = {}) => {
    for (let key in obj) {
      const propName = parent ? `${parent}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  };

  const flatData = data.map((item) => flattenObject(item));

  const headers = Object.keys(flatData[0]);
  const csvRows = [headers.join(",")];

  flatData.forEach((row) => {
    const values = headers.map((header) => {
      const escapedValue = ("" + (row[header] || "")).replace(/"/g, '\\"');
      return `${escapedValue}`;
    });
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
};

//To view the member_details
const teamdetails = async (req, res) => {
  const { team_id } = req.body;

  try {
    const [team] = await db.query(
      "SELECT * FROM member_details WHERE TEAM_ID = ?",
      [team_id]
    );

    res.status(200).json({ team });
  } catch (error) {
    console.error("Error during fetching team details:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { coordinatorLogin, download, linkdownload, teamdetails };
