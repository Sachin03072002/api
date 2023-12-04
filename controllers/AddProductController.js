const Product = require("../modals/Product");

// Controller to handle the creation of a new product
module.exports.createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { Name, Category, Size, Color } = req.body;
        // Create a new product instance
        const product = new Product({
            Name: Name,
            Category: Category,
            Size: Size,
            Color: Color
        });
        // The Price will be automatically calculated and set in the pre-save hook
        // Save the product to the database
        await product.save();

        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


