import { z } from "zod";

export const createSizeDto = z.object({
    name: z.string(),
});