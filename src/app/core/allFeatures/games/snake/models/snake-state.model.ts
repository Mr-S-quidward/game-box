import {IPosition} from "../../../../models/interfaces/position.interface";
import {SnakeMovementsEnum} from "./enums/snake-movements.enum";
import {ISnakeBoard} from "./interfaces/snake-board.interface";

export interface SnakeStateModel {
  board: ISnakeBoard;
  snake: IPosition[];
  food: IPosition;
  score: number;
  lives: number;
  direction: SnakeMovementsEnum;
  isPlaying: boolean;
}
