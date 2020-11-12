import {
  Request,
  Response,
  NextFunction,
  Router
} from "express";
import {
  nameValidationMiddleware,
} from "../middleware/middlewares";
import {UserStatusController} from '../controllers/user-status-controller';




export class UserGameStatusRoutes {
  public userStatusController: UserStatusController = new UserStatusController();
  public routes(router: Router): void {
    // GET
    router.get("/gamestatus",(req: Request, res: Response, next: NextFunction) => {
      this.userStatusController.getUserGameStatus(req,res)
      }
    );

    // POST
    router.post("/gamestatus",nameValidationMiddleware,(req: Request, res: Response) => {
      if (!req.body) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
      }
      this.userStatusController.addUserGameStatus(req,res)
     });
    
  }
}


