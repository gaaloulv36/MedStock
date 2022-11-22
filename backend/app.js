const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const debug = require("debug")("node-angular");

const cors = require("cors");
const app = express();
const supplierRoutes = require("./routes/supplier");
const inventoryRoutes = require("./routes/inventory");
const userRoutes = require("./routes/user");
const salesRoutes = require("./routes/sales");
const doctorUserRoutes = require("./routes/doctorUser");
const doctorOrderRoutes = require("./routes/doctorOrders");
app.use(cors());
app.set("port", process.env.port || 3000);
// const { error } = require("console");
// const verifiedDoctorOrderRoutes = require('./routes/verifiedDoctorOrder');
// const pickedUpOrdersRoutes = require('./routes/pickedUpOrders');

mongoose
  .connect(
    "mongodb+srv://amine:4DBYHawYTfCghflY@cluster0.uu3kic7.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log("connection failed! ", err.message);
  });

mongoose.set("useCreateIndex", true);
console.log();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use("/images", express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
    "HTTP/1.1 200 OK",
    "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.use("/api/supplier", supplierRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/doctorUser", doctorUserRoutes);
app.use("/api/doctorOrder", doctorOrderRoutes);
//app.use("/api/verifiedDoctorOrder",verifiedDoctorOrderRoutes);
//app.use("/api/pickedUpOrders",pickedUpOrdersRoutes);
app.listen(app.get("port"), function (err, response) {
  console.log("server is running on port", app.get("port"));
});

// module.exports = app;
