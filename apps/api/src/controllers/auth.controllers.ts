import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try{
  const { email, password } = req.body;
  const newUser: PlatformUser = {
    id: null,
    email,
    password
  };

  const createdUser = await createUser(newUser);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
};