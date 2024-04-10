import express from "express";
import { CharacterController } from "../controllers/character.controller";

const router = express.Router();

router.get('/characters', CharacterController.getCharacters);
router.get('/characters/:id', CharacterController.getCharacterById);

export default router;