const router = require("express").Router();

const apiKeyMiddleware = require("../middlewares/api_key");

router.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname) + "/index.html");
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  //   res.sendFile(path.resolve(__dirname) + "/about.html");
  res.render("about", {
    about: "My About Page",
  });
});

// router.get("/api/products", [apiKeyMiddleware], (req, res) => {
//   res.json([
//     {
//       id: "123",
//       name: "chrome",
//     },
//     {
//       id: "124",
//       name: "firefox",
//     },
//   ]);
// });

module.exports = router; // used in the mainRouter of server.js file
