const express = require("express");

const router = express.Router();

const {

  getUsers,
  getOrders,
  deleteFood

} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");


router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getUsers
);

router.get(
  "/orders",
  authMiddleware,
  adminMiddleware,
  getOrders
);

router.delete(
  "/food/:id",
  authMiddleware,
  adminMiddleware,
  deleteFood
);

module.exports = router;