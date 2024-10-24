import express from "express";
import {
    createOrder,
    getOrderById,
    handlePayment,
    getOrdersByUser
} from "../application/orders.js";

import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const ordersRouter = express.Router();

ordersRouter.route("/").post(ClerkExpressRequireAuth({}),createOrder);
ordersRouter.route("/:id").get(ClerkExpressRequireAuth({}),getOrderById);
ordersRouter.route("/webhook/payment").post(handlePayment);
ordersRouter.route("/user/:userId").get(getOrdersByUser);

export default ordersRouter;
