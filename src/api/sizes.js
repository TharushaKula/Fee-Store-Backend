import express from "express";
import {
  getSizes,
  getSizeById,
  createSize,
} from "../application/sizes.js";

const sizesRouter = express.Router();

sizesRouter.route("/").get(getSizes).post(createSize);
sizesRouter.route("/:id").get(getSizeById);

export default sizesRouter;