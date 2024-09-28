import { z } from "zod";

export const createColorDto = z.object({
    name: z.string(),
});
