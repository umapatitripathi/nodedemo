const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World from Node.js</h1>");
});

app.get("/api/items", (req, res) => {
    res.json([
        { itemcode: 101, itemname: "Motor" },
        { itemcode: 102, itemname: "Bearing" },
        { itemcode: 103, itemname: "Pump" }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});