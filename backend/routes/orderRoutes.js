const express = require("express");

const router = express.Router();

const {

  placeOrder,
  getMyOrders,
  trackOrder,
  cancelOrder

} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");


router.post(
  "/place",
  authMiddleware,
  placeOrder
);

router.get(
  "/myorders",
  authMiddleware,
  getMyOrders
);

router.get(
  "/track/:id",
  authMiddleware,
  trackOrder
);

router.put(
  "/cancel/:id",
  authMiddleware,
  cancelOrder
);

module.exports = router;