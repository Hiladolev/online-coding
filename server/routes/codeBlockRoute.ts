import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/codeBlockLogic";

const router = express.Router();

router.get(
  "/allCodeBlocks",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getAllCodeBlocks());
  }
);

export default router;