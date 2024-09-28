"use strict";

import 'dotenv/config';
import express from "express";
import productsRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import clothesRouter from "./api/clothes.js";
import ordersRouter from "./api/orders.js";
import sizesRouter from "./api/sizes.js";
import colorsRouter from "./api/colors.js";
import { connectDB } from "./infrastructure/db.js";
import { globalErrorHandler } from "./api/middleware/global-error-handler.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

app.use("/api/products", productsRouter);
app.use("/api/colors", colorsRouter);
app.use("/api/sizes", sizesRouter);
app.use("/api/clothes", clothesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);

app.use(globalErrorHandler);

const PORT = 8000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
