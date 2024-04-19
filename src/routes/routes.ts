import express from "express";
import { CharacterController } from "../controllers/character.controller";
import { AbilityController } from "../controllers/ability.controller";
import { ItemController } from "../controllers/item.controller";

const router = express.Router();

// character routes
router.get('/characters', CharacterController.getCharacters);
router.get('/characters/:id(\\d+)', CharacterController.getCharacterById);
router.get('/characters/:name([a-zA-Z]+)', CharacterController.getCharacterByName);

// ability routes
router.get('/abilities', AbilityController.getAbilities);
router.get('/abilities/:id(\\d+)', AbilityController.getAbilityById);

// item routes
router.get('/items', ItemController.getItems);
router.get('/items/:id(\\d+)', ItemController.getItemById);
router.get('/items/:id(\\d+)', ItemController.getItemsByCategory);
router.get('/items/:category([a-zA-Z]+)', ItemController.getItemsByCategory);

export default router;