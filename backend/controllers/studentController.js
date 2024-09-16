const db = require('../config/db.config');

const register = async (req, res) => {
    try {
        // Fetch registration data from the request body
        const registrationData = req.body;
        console.log("Registration Data:", registrationData);

        const { teamName, leaderEmail, leaderContact, dept, numberOfMembers, members } = registrationData;

        // Insert team data into event_registrations table
        // const [teamResult] = await db.query(
        //     `INSERT INTO event_registrations (TEAM_NAME, EVENT_NAME, DEPARTMENT, NO_OF_MEMBERS, TL_MAIL, PAYMENT_STATUS, TL_contact) 
        //     VALUES (?, ?, ?, ?, ?, ?, ?)`,
        //     [teamName, registrationData.event.details.name, dept, numberOfMembers, leaderEmail, registrationData.payment_status, leaderContact]
        // );

        // const teamId = teamResult.insertId;

        // // Insert members data into member_details table
        // const memberPromises = members.map(member => {
        //     return db.query(
        //         `INSERT INTO member_details (TEAM_ID, DEPARTMENT, MEMBERS_NAME, REGISTER_NO, TEAM_NAME, YEAR_OF_STUDY) 
        //         VALUES (?, ?, ?, ?, ?, ?)`,
        //         [teamId, member.department, member.name, member.regNo, teamName, member.yearOfStudy]
        //     );
        // });

        // await Promise.all(memberPromises);

        // calculate the amount to be paid 
        const amountToBePaid = parseFloat(registrationData.event.details.fee * numberOfMembers);


        res.status(200).json({ message: "Success" , amountToBePaid: amountToBePaid, registrationData });
    } catch (error) {
        console.error("Error occurred while registering:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { register };

