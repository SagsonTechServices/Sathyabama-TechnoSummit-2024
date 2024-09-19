const db = require("../config/db.config");
const nodemailer = require('nodemailer');

const InchargeLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [inchargeResult] = await db.query(
      'SELECT * FROM dept_incharge WHERE contact = ? AND password = ?',
      [phone_number, password]
    );

    if (inchargeResult.length === 0) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Get the department
    const dept_name = inchargeResult[0].dept;

    const [teams] = await db.query(
      'SELECT * FROM EVENT_REGISTRATIONS WHERE DEPARTMENT = ?',
      [dept_name]
    );

    res.status(200).json({ teams });
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


const updatePaymentStatus = async (req, res) => {
  const { teamIds } = req.body;

  console.log(teamIds)

  if (!teamIds || !teamIds.length) {
    return res.status(400).json({ message: "No team IDs provided." });
  }

  try {
    const placeholders = teamIds.map(() => "?").join(", ");
    
    const query = `UPDATE event_registrations SET PAYMENT_STATUS = 1 WHERE TEAM_ID IN (${placeholders})`;

    const result = await db.query(query, teamIds);
    
    if (result[0].affectedRows > 0) {
      res.status(200).json({ message: "Payment status updated successfully." });
      console.log("Payment status updated successfully.");

      const [dbdata] = await db.query(`SELECT TL_MAIL, TEAM_NAME, EVENT_NAME, AMOUNT, NO_OF_MEMBERS FROM event_registrations WHERE TEAM_ID IN (${placeholders})`, teamIds);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sathyabama.technosummit2024@gmail.com',
          pass: 'jabn sluk lmum hpml'
        }
      });

      const sendEmail = (recipientEmail, subject, message) => {
        const mailOptions = {
          from: 'sathyabama.technosummit2024@gmail.com',
          to: recipientEmail,
          subject: subject,
          text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(`Error sending email to ${recipientEmail}:`, error);
          } else {
            console.log(`Email sent to ${recipientEmail}: ${info.response}`);
          }
        });
      };

      // Loop through the data and send emails
      dbdata.forEach(entry => {
        const recipientEmail = entry.TL_MAIL;
        const eventName = entry.EVENT_NAME;
        const teamName = entry.TEAM_NAME;
        const amount = entry.AMOUNT;
        const members = entry.NO_OF_MEMBERS;

        const subject = 'TechnoSummit-2024 Payment Updated';
        const message = `Greetings, Your team ${teamName} has successfully registered for ${eventName}. Payment of Rs.${amount} has been received and updated. Number of members in your team: ${members}`;

        sendEmail(recipientEmail, subject, message);
      });
      console.log("Payment status updated and emails sent successfully.");
      //return res.status(200).json({ message: 'Payment status updated and emails sent successfully.' });

    } else {
      return res.status(400).json({ message: "No teams found to update." });
    }

  } catch (error) {
    console.error('Error updating payment status:', error);
    return res.status(500).json({ error: "Failed to update payment status." });
  }
};


module.exports = {updatePaymentStatus,InchargeLogin};
