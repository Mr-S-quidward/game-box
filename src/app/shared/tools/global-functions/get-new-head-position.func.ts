import {IPosition} from "../../../core/models/interfaces/position.interface";
import {SnakeMovementsEnum} from "../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";

export const getNewHeadPosition = (head: IPosition, direction: SnakeMovementsEnum): IPosition => {
  switch (direction) {
    case SnakeMovementsEnum.up:
      return {x: head.x, y: head.y - 20};
    case SnakeMovementsEnum.down:
      return {x: head.x, y: head.y + 20};
    case SnakeMovementsEnum.left:
      return {x: head.x - 20, y: head.y};
    case SnakeMovementsEnum.right:
      return {x: head.x + 20, y: head.y};
  }
}
