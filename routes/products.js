const router = require("express").Router();

apiKeyMiddleware = require("../middlewares/api_key");

const ErrorHandler = require("../errors/ErrorHandler");
let products = require("../productData");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "My Product Page",
  });
});

router.get("/api/products", (req, res) => {
  res.json(products);
});

// router.post("/api/products", apiKeyMiddleware, (req, res, next)
router.post("/api/products", (req, res, next) => {
  const { name, price } = req.body;

  // console.log(req.body);

  if (!name || !price) {
    next(ErrorHandler.validationError("Name and Price fields are required!"));
    // throw new Error("All fields are requires!");
    // return res.status(422).json({ error: "All fields are required" });
  }
  // console.log();

  const product = {
    name,
    price,
    id: new Date().getTime().toString(),
  };

  products.push(product);

  res.json(product);
});

router.delete("/api/products/:productId", (req, res) => {
  products = products.filter((product) => req.params.productId !== product.id);
  res.json({ status: "OK" });
});

module.exports = router;
