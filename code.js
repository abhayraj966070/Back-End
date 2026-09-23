const express = require("express");

const app = express();
const PORT = 5000;

// JSON data read karne ke liye
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "Shri Ganpati Agro Center Backend is Running!"
    });
});

// Products API
app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Wheat Seeds",
            price: 500,
            category: "Seeds"
        },
        {
            id: 2,
            name: "Urea Fertilizer",
            price: 300,
            category: "Fertilizers"
        },
        {
            id: 3,
            name: "Drip Irrigation Pipe",
            price: 1200,
            category: "Irrigation"
        }
    ];

    res.json(products);
});

// Search API
app.get("/api/search", (req, res) => {
    const search = req.query.q;

    const products = [
        { id: 1, name: "Wheat Seeds", category: "Seeds" },
        { id: 2, name: "Urea Fertilizer", category: "Fertilizers" },
        { id: 3, name: "Drip Irrigation Pipe", category: "Irrigation" }
    ];

    const result = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    res.json(result);
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});