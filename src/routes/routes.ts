import express from "express";
import { CharacterController } from "../controllers/character.controller";
import { AbilityController } from "../controllers/ability.controller";

const router = express.Router();

router.get('/characters', CharacterController.getCharacters);
router.get('/characters/:id(\\d+)', CharacterController.getCharacterById);
router.get('/characters/:name([a-zA-Z]+)', CharacterController.getCharacterByName);
router.get('/abilities', AbilityController.getAbilities);
router.get('/abilities/:id(\\d+)', AbilityController.getAbilityById);

export default router;