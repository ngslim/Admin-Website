const Order = require("../models/Order");

const indexPage = (req, res, next) => {
  res.render("order/index", { title: "Order" });
};

const getOrders = async (req, res, next) => {
  try {
    const { draw, columns, order, start, length } = req.body;
    const nameColSort = columns[order[0].column].data;

    const recordsTotal = await Order.find({}).sort({
      [nameColSort]: order[0].dir,
    });
    const data = recordsTotal.slice(start, start + length);
    res.json({
      raw: draw + 1,
      recordsTotal: recordsTotal.length,
      recordsFiltered: recordsTotal.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const orderDetailPage = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId)
      .populate("user", "email")
      .populate("products");
    console.log(order);
    res.render("order/detail", { order });
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    await Order.findByIdAndUpdate(orderId, { status });
    res.send(true);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  indexPage,
  getOrders,
  orderDetailPage,
  updateStatus,
};
