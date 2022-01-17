const express = require("express");

const OrderController = require("../controllers/order");

const router = express.Router();

router
  .route("/")
  .get(OrderController.indexPage)
  .post(OrderController.getOrders);

router.route("/update/:orderId").get(OrderController.orderDetailPage);

module.exports = router;
