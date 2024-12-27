const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

const products = [
  {
    id: "1",
    title: "Anolog Watch",
    price: "$99.99",
    category: "watches",
    img_path: "watch1.jpg",
    details: {
      description: "classic item ever made in the world history",
    },
  },
  {
    id: "2",
    title: "Anolog digital Watch",
    price: "$99.98",
    category: "watches",
    img_path: "watch2.jpg",
    details: {
      description: "classic item ever made in the world history dfd",
    },
  },
  {
    id: "3",
    title: "classic Shoe",
    price: "$95.99",
    category: "shoes",
    img_path: "shoe1.jpg",
    details: {
      description: "classic item ever made in the world history",
    },
  },
  {
    id: "4",
    title: "classic Shoe mass",
    price: "$93.99",
    category: "shoes",
    img_path: "shoe2.jpg",
    details: {
      description: "classic item ever made in the world history sfc",
    },
  },
];

app.get("/api/products", (req, res) => {
  const { id } = req.query;
  if ("id" in req.query) {
    return res.json(products[id - 1]);
  }
  res.json(products);
});

app.get("/api/products/:filename", (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "images", filename);

  // res.json(products)
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Image not found");
    }
  });
});

const PORT = 3005;
app.listen(PORT, console.log(`server running on port ${PORT}`));
