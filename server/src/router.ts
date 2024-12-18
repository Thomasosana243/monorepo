import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define program-related routes
import programActions from "./modules/program/programActions";
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

// Define category-related routes
import { getCategories, getCategoryById } from "./modules/category/categoryActions"; // Assurez-vous que le chemin est correct

// Route pour récupérer toutes les catégories
router.get("/api/categories", (req, res) => {
  const categories = getCategories();
  res.status(200).json(categories); // Retourne la liste des catégories
});

// Route pour récupérer une catégorie spécifique par ID
router.get("/api/categories/:id", (req, res) => {
  const { id } = req.params;
  const category = getCategoryById(Number(id)); // Convertir l'ID en nombre
  if (category) {
    res.status(200).json(category); // Retourne la catégorie trouvée
  } else {
    res.status(404).json({ message: "Category not found" }); // Retourne une erreur si non trouvée
  }
});

/* ************************************************************************* */

// Declaration of a "Welcome" route
import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
