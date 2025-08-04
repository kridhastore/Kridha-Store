import { Request, Response } from "express";

export const createCheckoutSession = async (req: Request, res: Response) => {
  const { amount } = req.body;

  res.send("Checkout");
};
