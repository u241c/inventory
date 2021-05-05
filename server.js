const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000


require("./config/database");

const indexRouter = require("./routes/index");
const inventorysRouter = require("./routes/inventorys");

// const reviewsRouter = require("./routes/reviews");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/inventorys", inventorysRouter);

// app.use("/", reviewsRouter);

app.listen(PORT, function () {
  console.log(`Express is listening on port:${PORT}`);
});