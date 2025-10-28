//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("./models/user");

//usage of the imported service(instantiation)
const app = express();
const PORT = process.env.PORT || 1234;
const db = mongoose.connection;

//database connection;
//ensure to fix useUrlParser and useUnifiedTopology as they are now deprecated.
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("error", () => console.log(error));
db.once("open", () => console.log("the DB is now connected"));

//middlewares
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.secure.message;
  next();
});

//set temlate engine
app.set("view engine", "ejs");

//route prefix
app.use("", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
