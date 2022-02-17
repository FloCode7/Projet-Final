const router = require("express").Router();

const ArticleController = require("../controllers/ArticleController");

// Création d'article
router.post("/", ArticleController.createArticle);

// Modification d'un article
router.put("/:id", ArticleController.updateArticle);

// Suppression d'un article
router.delete("/:id", ArticleController.deleteArticle);

// Trouver un article
router.get("/:id", ArticleController.getAnArticle);

// Trouver tous les articles
router.get("/", ArticleController.getAllArticles);

module.exports = router;
