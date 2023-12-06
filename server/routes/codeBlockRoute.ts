import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/codeBlockLogic";

const router = express.Router();

router.get(
  "/allCodeBlocks",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getAllCodeBlocks());
  }
);

router.get(
  "/entrancesById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getEntrancesById(+request.params.id));
  }
);
router.get(
  "/codeBlockById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getCodeBlockById(+request.params.id));
  }
);

export default router;
