import * as mongoose from 'mongoose';
import { UserGameStatusSchema } from '../models/user-game-status';
import { Request, Response } from 'express';

const UserGameStatusModel = mongoose.model('UserGameStatus', UserGameStatusSchema);
export class UserStatusController{

    public addUserGameStatus (req: Request, res: Response) {                
        let newContact = new UserGameStatusModel(req.body);
        newContact.save((err, contact) => {
            if(err){
            res.status(400)
               return res.send(err);
            }
            res.json(contact);
            res.status(201) 
      });
    }

    public getUserGameStatus(req: Request, res: Response){
        UserGameStatusModel.find( {}, null, { sort: { score: -1 }, limit: 10 }, (err, contact) => {
            if(err){
                res.send(err);
                res.status(400)
            }
            res.json(contact);
        });
    }
}