const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const productRouter = require("./routes/products");

// setting the ejs to view engine (ejs extension is for loading dynamic data into the html page)
app.set("view engine", "ejs");

const mainRouter = require("./routes/index");
const ErrorHandler = require("./errors/ErrorHandler");

app.use(express.static("public"));

// middleware to convert the form data into json (from client to server it works)
app.use(express.json());

//for normal form submission
// app.use(express.urlencoded({ extended: false }));

app.use(productRouter);

app.use(mainRouter);

//order is must (below all routes)

app.use((req, res, next) => {
  return res.json({ message: "page not found" });
});

app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.status).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  }
  console.log("Error:", err.message);

  // because we have send response res.json() next() is not required dont worry req will not hang
  // next();
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
