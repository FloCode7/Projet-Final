const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const AuthController = require("../controllers/AuthController");

// Inscription
router.post("/register", AuthController.register);

// Connexion
router.post("/login", AuthController.login);

module.exports = router;
