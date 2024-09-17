const db = require("../config/db.config");

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
    } else {
      res.status(400).json({ message: "No teams found to update." });
    }
  } catch (error) {
    console.error('Error updating payment status:', error);
    res.status(500).json({ error: "Failed to update payment status." });
  }
};


module.exports = {updatePaymentStatus,InchargeLogin};
