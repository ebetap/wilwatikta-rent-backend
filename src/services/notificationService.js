const admin = require('../config/firebase');

exports.sendNotification = async (token, message) => {
  try {
    await admin.messaging().send({
      token,
      notification: {
        title: message.title,
        body: message.body,
      },
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
