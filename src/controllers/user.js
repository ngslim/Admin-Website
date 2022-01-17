const User = require("../models/User");

const indexPage = (req, res, next) => {
  res.render("user/index", { title: "User" });
};

const getUsers = async (req, res, next) => {
  try {
    const { draw, columns, order, start, length } = req.body;
    const nameColSort = columns[order[0].column].data;

    const recordsTotal = await User.find({}).sort({
      [nameColSort]: order[0].dir,
    });
    const data = recordsTotal.slice(start, start + length);
    res.json({
      raw: draw + 1,
      recordsTotal: recordsTotal.length,
      recordsFiltered: recordsTotal.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    await User.findByIdAndUpdate(userId, { is_lock: !user.is_lock });
    res.redirect("/user");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  indexPage,
  getUsers,
  updateUser,
};
