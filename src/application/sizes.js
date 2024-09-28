import Size from "../infrastructure/schemas/Sizes.js";
import { createSizeDto } from "./dto/sizes.js";

export const getSizes = async (req, res) => {
  const sizes = await Size.find();
  return res.status(200).json(sizes);
}

export const createSize = async (req, res) => {

  const size = createSizeDto.safeParse(req.body);

  if (!size.success) {
    return res.status(400).json({ message: "Invalid data" }).send();
  }

  await Size.create({ name: size.data.name });
  return res.status(201).send();
}

export const getSizeById = async (req, res) => {
  const id = req.params.id;
  const size = await Size.findById(id);
    if (!size) {
        return res.status(404).json({ message: "Size not found" }).send();
    }
    return res.status(200).json(size).send();
}