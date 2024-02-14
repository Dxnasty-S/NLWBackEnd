
import { response } from "express";
import { UserRepository } from "../repositories/UserRepositories";


export class CreateUserService {
  async execute({ name, email, admin }) {

    const userAlreadyExists = await UserRepository.findOneBy({email})

    if (userAlreadyExists){
      throw new Error("Email already exixst")
    }
    try {
      const newUser = UserRepository.create({ name, email, admin })

      await UserRepository.save(newUser)
      
      //mostra no terminal o usuario que foi cadastrado
      //console.log("newUser", newUser)

    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: 'Internal Server Error' })
    }


  }
}
