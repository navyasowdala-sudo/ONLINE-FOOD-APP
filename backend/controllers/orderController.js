const Order = require("../models/Order");

const Cart = require("../models/Cart");


// PLACE ORDER

const placeOrder = async (
  req,
  res
) => {

  try {

    const { paymentMethod } = req.body;

    const cartItems = await Cart.find({

      userId: req.user.id

    }).populate("foodId");

    let total = 0;

    cartItems.forEach((item) => {

      total +=
        item.foodId.price * item.quantity;

    });

    const order = await Order.create({

      userId: req.user.id,

      items: cartItems,

      totalAmount: total,

      paymentMethod,

      paymentStatus:
        paymentMethod === "COD"
          ? "Pending"
          : "Paid"

    });

    await Cart.deleteMany({
      userId: req.user.id
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// GET MY ORDERS

const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.user.id
    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// TRACK ORDER

const trackOrder = async (req, res) => {

  try {

    const order = await Order.findById(
      req.params.id
    );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// CANCEL ORDER

const cancelOrder = async (req, res) => {

  try {

    const order = await Order.findByIdAndUpdate(

      req.params.id,

      {
        status: "Cancelled"
      },

      { new: true }

    );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {

  placeOrder,
  getMyOrders,
  trackOrder,
  cancelOrder

};