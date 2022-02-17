const router = require("express").Router();

const UserController = require("../controllers/UserController");

// Modification d'un utilisateur
router.put("/:id", UserController.updateUser);

// Suppression d'un utilisateur
router.delete("/:id", UserController.deleteUser);

//  Trouver un utilisateur
router.get("/:id", UserController.getOneUser);

module.exports = router;
