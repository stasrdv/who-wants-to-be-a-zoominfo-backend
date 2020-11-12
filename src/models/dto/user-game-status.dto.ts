export interface UserGameStatus {
    userName: string;
    score: number;
    gameStatus: GameStatus;
}
export interface GameStatus {
    questionStatus: QuestionStatus[];
}
export interface QuestionStatus {
    question: string,
    isCorrect: boolean;
}