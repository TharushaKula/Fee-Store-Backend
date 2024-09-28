import express from "express";
import {
    getColors,
    getColorById,
    createColor,
} from "../application/colors.js";

const colorsRouter = express.Router();

colorsRouter.route("/").get(getColors).post(createColor);
colorsRouter.route("/:id").get(getColorById);

export default colorsRouter;