import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tag } from "./entities/Tag"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/entities/*.{ts,js}`, Tag],
    migrations: [`${__dirname}/**/migration/*.{ts.js}`],
    subscribers: [],
})
