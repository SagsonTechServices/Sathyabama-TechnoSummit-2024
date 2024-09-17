const db = require("../config/db.config");

const coordinatorlogin = async (req, res) => {
  const { phone_number,password,event_name } = req.body;

  try {
    const coordinator = await db.query(
      'SELECT * FROM event_coordinator WHERE phone_number = ? AND password =?',
      [phone_number,password]
    );
    if (!coordinator) {
      return res.status(401).json({ message: 'invalid login' });
    }
    else{
      const teams = await db.query(
        'SELECT * FROM event_registrations WHERE EVENT_NAME = ?',
        [event_name]
    );

    res.status(200).json({ teams });
    }
  }
  catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
}
};
module.exports=coordinatorlogin;