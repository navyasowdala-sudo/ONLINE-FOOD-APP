const express = require("express");

const router = express.Router();

const {

  addToCart,
  getCart,
  removeCartItem,
  updateQuantity

} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");


router.post(
  "/add",
  authMiddleware,
  addToCart
);

router.get(
  "/",
  authMiddleware,
  getCart
);

router.delete(
  "/remove/:id",
  authMiddleware,
  removeCartItem
);

router.put(
  "/update/:id",
  authMiddleware,
  updateQuantity
);

module.exports = router;