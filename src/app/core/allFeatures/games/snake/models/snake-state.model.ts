import {IPosition} from "../../../../models/interfaces/position.interface";
import {SnakeMovementsEnum} from "./enums/snake-movements.enum";
import {ISnakeBoard} from "./interfaces/snake-board.interface";
import {ISnakeSegments} from "./interfaces/snake.interface";

export interface SnakeStateModel {
  board: ISnakeBoard;
  snake: ISnakeSegments[];
  food: IPosition;
  score: number;
  lives: number;
  direction: SnakeMovementsEnum;
  isPlaying: boolean;
}
