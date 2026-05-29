const Cart = require("../models/Cart");


// ADD TO CART

const addToCart = async (req, res) => {

  try {

    const { foodId, quantity } = req.body;

    const cart = await Cart.create({

      userId: req.user.id,
      foodId,
      quantity

    });

    res.status(201).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// GET USER CART

const getCart = async (req, res) => {

  try {

    const cartItems = await Cart.find({
      userId: req.user.id
    }).populate("foodId");

    res.json(cartItems);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// REMOVE ITEM

const removeCartItem = async (req, res) => {

  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Removed"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// UPDATE QUANTITY

const updateQuantity = async (req, res) => {

  try {

    const { quantity } = req.body;

    const updated = await Cart.findByIdAndUpdate(

      req.params.id,

      { quantity },

      { new: true }

    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
  addToCart,
  getCart,
  removeCartItem,
  updateQuantity
};