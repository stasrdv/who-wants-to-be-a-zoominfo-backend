import { Request, Response } from "express";
import * as Joi from "@hapi/joi";
import "joi-extract-type";


 export const nameValidationMiddleware = (
  req: Request,
  res: Response,
  next: Function
) => {
  Joi.validate(req.body, gameStatusSchema, (err: Error, value) => {
    if (err) {
      res.status(409).end(err.message);
    }
  });
  next();
};
const gameStatusSchema = Joi.object({
    userName: Joi.string()
    .required(),
    score: Joi.number()
    .required(),
    gameStatus:Joi.object().optional()

});
 export default [nameValidationMiddleware];


