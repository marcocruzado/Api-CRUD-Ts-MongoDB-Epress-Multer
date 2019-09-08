import { Request, Response, response } from "express";
import Foto from "../models/Fotos";
import path from "path"; //para formatear la diraccion del archivo
import fs from "fs-extra"; //fs-extra se utilizara para eliminar los archivos denuestra carpeta uploads

export async function getFotos(req: Request, res: Response): Promise<Response> {
  const fotos = await Foto.find();
  return res.json(fotos);
}

export async function getFoto(req: Request, res: Response): Promise<Response> {
  const foto = await Foto.findById(req.params.id);
  return res.json({ foto });
}

export async function createFoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;
  const newFoto = {
    title: title,
    description: description,
    imagePath: req.file.path
  };

  const foto = new Foto(newFoto);
  await foto.save();
  return res.json({
    message: "la foto ya fue guardadaa",
    foto
  });
}

export async function deleteFoto(
  req: Request,
  res: Response
): Promise<Response> {
  const foto = await Foto.findByIdAndRemove(req.params.id);

  if (foto) {
    await fs.unlink(path.resolve(foto.imagePath));
  }

  return res.json({
    message: "foto removida",
    foto
  });
}

export async function updateFoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedfoto = await Foto.findByIdAndUpdate(id, {
    title,
    description
  },{new: true});
  return res.json({
      message:"foto actualizada",
      updatedfoto
  })
}
