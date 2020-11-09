
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserGameStatusSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
    required: true,
  },
  gameStatus:{
    questionStatus : [{
      question : String,
      isCorrect : Boolean
       }]
  }

});


