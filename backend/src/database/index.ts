import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Qrcode } from "../entities/Qrcode";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Qrcode],
  subscribers: [],
  migrations: ["./src/database/migrations/**/*.ts"],
})