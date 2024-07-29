const stripe = require('../config/stripe');
const Order = require('../models/Order');

exports.createPayment = async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
    res.status(200).json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.refundPayment = async (req, res) => {
  const { paymentIntentId } = req.body;
  try {
    const refund = await stripe.refunds.create({ payment_intent: paymentIntentId });
    res.status(200).json({ success: true, data: refund });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
