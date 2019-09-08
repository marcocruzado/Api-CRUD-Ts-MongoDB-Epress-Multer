import { Router } from "express";
import { createFoto,getFotos,getFoto,deleteFoto,updateFoto } from "../controllers/foto.controller";
import multer from '../libs/multer'


const router = Router();

router.route("/fotos")
  .get(getFotos)
  .post(multer.single('image'),createFoto)

  router.route("/fotos/:id")
    .get(getFoto)
    .delete(deleteFoto)
    .put(updateFoto)

export default router;
