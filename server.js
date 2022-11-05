const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

function handleOperation(operation_type, x, y) {
  switch (operation_type) {
    case "addition":
      return x + y;
    case "subtraction":
      return x - y;
    case "multiplication":
      return x * y;
    case "division":
      return x / y;
    default:
      return "this is not a valid operator in the operator type Enum";
  }
}

app.post("/calculate", (req, res) => {
  const { operation_type, x, y } = req.body;

  let result = handleOperation(operation_type, x, y);

  res.status(200).json({
    slackUsername: "adedotun",
    result: result,
    operation_type: "addition",
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`running on the ${process.env.PORT || 5000}`);
});
