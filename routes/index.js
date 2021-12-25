import express from "express";
import { getkomentars, getkomentarsID, savekomentars, updatekomentars, deletekomentars } from "../controllers/komentartController.js";
const router = express.Router();
//get all
router.get('/komentar', getkomentars);
//post data
router.post('/komentar/create', savekomentars);
//get by ID
router.get('/komentar/:id', getkomentarsID);
//update data
router.patch('/komentar/update/:id', updatekomentars);
//delete data
router.delete('/komentar/delete/:id', deletekomentars);

export default router;