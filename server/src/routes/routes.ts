import { Router } from "express";
import categoryRoutes from "./categories.route";
import productRoutes from "./product.route";
import checkoutRoutes from "./checkout.route";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/checkout", checkoutRoutes);

export default router;
