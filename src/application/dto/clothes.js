import {z} from "zod";

export const createClothesDto = z.object({
    categoryId: z.string(),
    image: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
    size: z.string(),
    color: z.string(),
});