const ErrorHandler = require("../errors/ErrorHandler");
function apiKey(req, res, next) {
  const api_key = "1234567";
  console.log(req.query.api_key);
  //   console.log(req.query);

  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    // next(ErrorHandler.forbidden());
    res.json({ message: "Not allowed" });
  }
  // if we will not call the next function and the req will hang and will not go forward
}

module.exports = apiKey;
