import { Request, Response } from "express";

export const logErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  next(err);
};
export const clientErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  res.status(500);
  res.render("error", { error: err });
};

export default [logErrors, clientErrorHandler, errorHandler];
