import Clothes from "../infrastructure/schemas/Clothes.js";
import { createClothesDto } from "./dto/clothes.js";
import { ValidationError } from "../domain/errors/validation-error.js";

export const getClothes = async (req, res) => {
    if (req.query.categoryId) {
        const categoryId = req.query.categoryId;
        const filteredClothes = await Clothes.find({ categoryId: categoryId });
        return res.status(200).json(filteredClothes).send();
    }
    const clothes = await Clothes.find();
    return res.status(200).json(clothes);
};

export const createClothes = async (req, res, next) => {
    try {
        const clothes = createClothesDto.safeParse(req.body);
        if (!clothes.success) {
            throw new ValidationError(clothes.error.message);
        }
        await Clothes.create({
            categoryId: clothes.data.categoryId,
            image: clothes.data.image,
            name: clothes.data.name,
            price: clothes.data.price,
            description: clothes.data.description,
            size: clothes.data.size,
            color: clothes.data.color,
        });
        return res.status(201).send();
    } catch (error) {
        next(error);
    }
}

export const getClothesById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const clothes = await Clothes.findById(id).populate("categoryId");
        if (!clothes) {
            throw new NotFoundError("Clothes not found");
        }
        return res.status(200).json(clothes).send();
    } catch (error) {
        next(error);
    }
}