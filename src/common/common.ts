import cors from "cors";
import parser from "body-parser";
import { Router } from "express";
import expressWinston = require("express-winston");
import * as winston from "winston";
import { logErrors, clientErrorHandler, errorHandler } from "../middleware/errorHandlers";

export const handleCors = (router: Router) => router.use(cors());

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleErrors = (router: Router) => {
  router.use(logErrors);
  router.use(clientErrorHandler);
  router.use(errorHandler);
};

export const logger = (router: Router) => {
  const logger = winston.createLogger();
  router.use(
    expressWinston.logger({
      winstonInstance: logger
    })
  );
};

export default [handleCors,handleBodyRequestParsing,handleErrors,logger];
