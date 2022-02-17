// DOTENV
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 3001;

// EXPRESS
const express = require("express");
const app = express();
app.use(express.json());

// APPEL ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const articleRoute = require("./routes/articles");

// MONGOOSE
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connecté à la base de données`))
  .catch((err) => console.error(err));

// MULTER
const multer = require("multer");

const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: imgStorage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Fichier correctement envoyé !");
});

// PATH
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

// ======================================================================= //

// REDIRECTION ROUTES
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/articles", articleRoute);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
