const db = require("../config/db.config");

const coordinatorLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [coordinatorResult] = await db.query(
      'SELECT * FROM event_incharge WHERE contact = ? AND password = ?',
      [phone_number, password]
    );

    if (coordinatorResult.length === 0) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Get the event
    const event_name = coordinatorResult[0].event;

    const [teams] = await db.query(
      'SELECT * FROM EVENT_REGISTRATIONS WHERE EVENT_NAME = ? AND PAYMENT_STATUS=1',
      [event_name]
    );

    res.status(200).json({ teams });
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = coordinatorLogin;
