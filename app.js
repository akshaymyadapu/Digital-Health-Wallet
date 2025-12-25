const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
db.sequelize.sync();

// routes
app.use("/api/users", require("./app/routes/user.routes"));
app.use("/api/vitals", require("./app/routes/vitals.routes"));
app.use("/uploads", express.static("uploads"));
app.use("/api/reports", require("./app/routes/reports.routes"));


// test route
app.get("/", (req, res) => {
  res.json({ message: "Digital Health Wallet Backend Running" });
});

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
