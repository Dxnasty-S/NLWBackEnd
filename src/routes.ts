import { Router } from "express";
import { UserController } from "./controllers/CreateUserController";

export const routes = Router();

routes.post("/users", new UserController().create)


