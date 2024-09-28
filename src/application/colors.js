import Color from "../infrastructure/schemas/Colors.js";
import { createColorDto } from "./dto/colors.js";

export const getColors = async (req, res) => {
  const colors = await Color.find();
  return res.status(200).json(colors);
}	

export const createColor = async (req, res) => {

  const color = createColorDto.safeParse(req.body);

  if (!color.success) {
    return res.status(400).json({ message: "Invalid data" }).send();
  }

  await Color.create({ name: color.data.name });
  return res.status(201).send();
}

export const getColorById = async (req, res) => {
  const id = req.params.id;
  const color = await Color.findById(id);
  if (!color) {
    return res.status(404).json({ message: "Color not found" }).send();
  }
  return res.status(200).json(color).send();
}