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
  } catch (err) {
    next(err);
  }
};

module.exports = {
  indexPage,
  getOrders,
  orderDetailPage,
};
