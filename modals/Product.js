const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Size: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    },
    Price: {
        type: Number,  // Assuming Price is a numeric value

    }
});

// Pre-save hook to calculate and set the price based on Size and Color
ProductSchema.pre('save', function (next) {
    const priceRules = [
        { size: 'L', color: 'Red', price: 100 },
        { size: 'M', color: 'Red', price: 150 },
        { size: 'L', color: 'Green', price: 200 },
        { size: 'M', color: 'Green', price: 250 }
    ];

    const rule = priceRules.find(rule => rule.size === this.Size && rule.color === this.Color);

    if (rule) {
        this.Price = rule.price;
        next();
    } else {
        // Handle the case where there's no matching rule
        next(new Error('No matching rule found for Size and Color'));
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
