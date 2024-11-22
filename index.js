const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to the CC-50 yeayy"
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});