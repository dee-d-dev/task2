const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.port || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "adedotun",
    backend: true,
    age: 22,
    bio: "I am currently an hng9 backend engineering intern",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
