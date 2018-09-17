const express = require("express"),
  app = express(),
  admin = express();

admin.get("/", (req, res) => {
  res.send("Admin Homepage!");
});

admin.get("/user", (req, res) => {
  res.send("Admin User Homepage!");
});

// Mount the admin sub-app
app.use("/admin", admin);

app.get("/", (req, res) => {
  res.send("Main homepage!");
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
