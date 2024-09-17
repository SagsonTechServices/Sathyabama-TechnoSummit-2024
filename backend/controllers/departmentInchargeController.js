const db = require("../config/db.config");

const InchargeLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [inchargeResult] = await db.query(
      'SELECT * FROM dept_incharge WHERE phone_number = ? AND password = ?',
      [phone_number, password]
    );

    if (inchargeResult.length === 0) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Get the department
    const dept_name = inchargeResult[0].dept_name;

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

module.exports = InchargeLogin;
