import { UserRepository } from "../repositories/UserRepositories";
import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export class UserController {
  async create(request: Request, response: Response) {
    const {name, email, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({name, email, admin});

    //essa linha foi comentada por nao ser necessaria para a criação do user
    return response.json(user);

  }
}
