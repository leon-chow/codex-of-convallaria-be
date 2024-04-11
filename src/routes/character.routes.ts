import express from "express";
import { CharacterController } from "../controllers/character.controller";

const router = express.Router();

router.get('/characters', CharacterController.getCharacters);
router.get('/characters/:id(\\d+)', CharacterController.getCharacterById);
router.get('/characters/:name([a-zA-Z]+)', CharacterController.getCharacterByName);

export default router;