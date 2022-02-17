const User = require("../models/User");
const Article = require("../models/Article");
const bcrypt = require("bcrypt");

// Modification d'un utilisateur
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      // Mise à jour de tout le body qui a été modifié de l'utilisateur avec "$set: req.body"
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Vous ne pouvez modifier que votre compte");
  }
};

// Suppression d'un utilisateur
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        // Suppression des articles de l'utilisateur en question
        await Article.deleteMany({ username: user.username });
        // Suppression de l'utilisateur
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("Utilisateur supprimé avec succès !");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("Utilisateur introuvable");
    }
  } else {
    res.status(401).json("Vous ne pouvez supprimer que votre compte");
  }
};

//  Trouver un utilisateur
const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getOneUser,
};
