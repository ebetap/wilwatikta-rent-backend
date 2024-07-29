const { sendNotification } = require('../services/notificationService');

exports.notifyUser = async (req, res) => {
  const { token, message } = req.body;
  try {
    await sendNotification(token, message);
    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
