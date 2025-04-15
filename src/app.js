const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("HELLO ");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
