import { UserGameStatusRoutes } from "./routes/userGameStatusRoutes";
import {
  handleCors,
  handleBodyRequestParsing,
  handleErrors,
  logger
} from "./common/common";
import mongoose from "mongoose";
import { DB_PASS, DB_USER } from "./utils/config";
const express = require("express");
const router = express.Router();



class App {
  public app = express();
  public categoryAPI: UserGameStatusRoutes = new UserGameStatusRoutes();

  constructor() {
    this.onServerStart()
  }

  private initCommonHandlers() {
    handleBodyRequestParsing(router);
    handleCors(router);
    handleErrors(router);
    logger(router);
  }

  private iniRoutes() {
    this.categoryAPI.routes(router);
  }


  private appInitializer(): void {
    this.app.use("/api", router);
    this.initCommonHandlers();
    this.iniRoutes();
    this.app.listen(4000, (err: any) => {
      if (err) {
        return console.log(err);
      }
      return console.log(`server is listening on ${4000}`);
    });
  }

  async onServerStart() {
    const uri =`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.1hi6l.mongodb.net/<statistic>?retryWrites=true&w=majority`;
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      console.log('Connected to Database')
      this.appInitializer();
    } catch (e) {
      console.log(e);
    }
  }
}


export default new App();
