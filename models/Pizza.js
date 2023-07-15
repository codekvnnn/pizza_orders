const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    pizza: {
        type: String,
        required: [true, "Pizza is required!"],
        minLength: [3, "Pizza must be at least 3 characters long"],
    },
    size: {
        type: String,
        required: [true, "Size is required!"],
        minLength: [3, "Size must be at least 3 characters long"],
    },
    delivered: {
        type: Boolean,
    },
}, { timestamps: true });

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
