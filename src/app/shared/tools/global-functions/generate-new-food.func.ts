import {IPosition} from "../../../core/models/interfaces/position.interface";
import {ISnakeBoard} from "../../../core/allFeatures/games/snake/models/interfaces/snake-board.interface";

export const generateNewFood = (field: ISnakeBoard, foodSize: number): IPosition => {
  return {
    x: Math.floor(Math.random() * (field.width - foodSize)) + field.position.x,
    y: Math.floor(Math.random() * (field.height - foodSize)) + field.position.y,
  };
}
