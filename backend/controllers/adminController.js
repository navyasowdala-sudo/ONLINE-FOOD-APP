const User = require("../models/User");

const Food = require("../models/Food");

const Order = require("../models/Order");


// GET USERS

const getUsers = async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// GET ORDERS

const getOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// DELETE FOOD

const deleteFood = async (req, res) => {

  try {

    await Food.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Food Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {

  getUsers,
  getOrders,
  deleteFood

};