import express from "express";
import type { RequestHandler } from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Route pour obtenir la liste des séries
const programs = [
  { id: 1, title: "Stranger Things", genre: "Science-fiction" },
  { id: 2, title: "Breaking Bad", genre: "Drame" },
  { id: 3, title: "Game of Thrones", genre: "Fantasy" },
  { id: 4, title: "The Crown", genre: "Drame historique" },
  { id: 5, title: "Narcos", genre: "Policier" },
];

// Route GET /api/programs
router.get("/api/programs", (req, res) => {
  res.json(programs);
});

/* ************************************************************************* */

// Declaration of a "Welcome" route

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

router.get("/", sayWelcome);

/* ************************************************************************* */

export default router;
