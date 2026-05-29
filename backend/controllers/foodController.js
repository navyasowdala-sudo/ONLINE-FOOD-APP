const Food = require("../models/Food");

const addFood = async (req, res) => {

  try {

    const food = await Food.create(req.body);

    res.status(201).json(food);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = { addFood };