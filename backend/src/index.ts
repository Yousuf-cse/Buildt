import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";

dotenv.config();

const app = express();

console.log("Port : ", process.env.PORT);
const PORT: number = parseInt(process.env.PORT || "5000", 10);
// Database initialize
connectDb();

app.listen(PORT, () => {
  console.log(
    `\x1b[32mYour server is running : http://localhost:${PORT}\x1b[0m`
  );
});

// Get

app.get("/", (req: Request, res: Response) => {
  res.send("Hello guys!");
});
