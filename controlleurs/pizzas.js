const pizzas = require("../products/pizzas");

exports.getPizzas = async ( req, res, next) => {
    res.send({"pizzas": pizzas})
};