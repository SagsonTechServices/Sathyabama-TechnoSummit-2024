
const db = require("../config/db.config");

const InchargeLogin = async (req, res) => {
  const { phone_number,password,dept_name } = req.body;

  try {
    const Incharge = await db.query(
      'SELECT * FROM dept_incharge WHERE dept_name = ? AND phone_number =?',
      [phone_number,password]
    );
    if (!Incharge) {
      return res.status(401).json({ message: 'invalid login' });
    }
    else{
      const teams = await db.query(
        'SELECT * FROM EVENT_REGISTRATIONS WHERE DEPARTMENT = ?',
        [dept_name]
    );

    res.status(200).json({ teams });
    }
  }
  catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
}
};

module.exports=InchargeLogin;