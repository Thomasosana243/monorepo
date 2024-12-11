import * as dotenv from "dotenv";
import express, { Request, Response, RequestHandler } from "express";
import "../database/checkConnection";
import app from "./app";

dotenv.config();

const port = process.env.APP_PORT || 3310;

const sayWelcome: RequestHandler = (req: Request, res: Response) => {
  res.send("Welcome to Wild Series !");
};

app.get("/", sayWelcome);

app.listen(port, () => {
  console.info(`Server is listening on port ${port}`);
}).on("error", (err: Error) => {
  console.error("Error:", err.message);
});

