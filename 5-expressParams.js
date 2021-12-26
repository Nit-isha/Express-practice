const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  //   console.log(req);
  //   console.log(req.params);

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Serve listening on port 5000");
});

//app.get('/api/products/:productID/reviews/:reviewID')
// then in browser localhost:5000/api/product/4/reviews/abc
