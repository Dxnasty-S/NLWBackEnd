import { AppDataSource } from "./data-source"
import express, { Request, Response, NextFunction } from "express" 
import { routes } from "./routes"
import "reflect-metadata"
import "express-async-errors" 

AppDataSource.initialize().then(async () => {

  //console.log("Here you can setup and run express / fastify / any other framework.")


  const app = express();

  app.use(express.json());

  app.use(routes);


  app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if( err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
  

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  })

  app.listen(3000, () => {
    console.log("Server Running")
  })

}).catch(error => console.log(error))
