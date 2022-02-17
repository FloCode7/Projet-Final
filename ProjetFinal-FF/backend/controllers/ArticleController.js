const User = require("../models/User");
const Article = require("../models/Article");

// Création d'article
const createArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Modification d'article
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.username === req.body.username) {
      try {
        const updatedArticle = await Article.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedArticle);
      } catch (error) {}
    } else {
      res.status(401).json("Vous ne pouvez modifier que vos articles !");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Suppression d'article
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.username === req.body.username) {
      try {
        await article.delete();
        res.status(200).json("Votre article a bien été supprimé !");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Vous ne pouvez supprimer que vos articles!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Trouver un article
const getAnArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Trouver tous les articles ou tous les articles d'un utilisateur
const getAllArticles = async (req, res) => {
  const username = req.query.user;
  try {
    let articles;
    if (username) {
      articles = await Article.find({ username: username });
    } else {
      articles = await Article.find();
    }
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getAnArticle,
  getAllArticles,
};
