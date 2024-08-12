import {IPosition} from "../../../../../models/interfaces/position.interface";
import {generateRandomId} from "../../../../../../shared/tools/global-functions/generate-random-id.func";
import {SnakeMovementsEnum} from "../enums/snake-movements.enum";

export interface ISnake {
  segments: ISnakeSegments[];
  direction: SnakeMovementsEnum;
}

export interface ISnakeSegments {
  id: string;
  position: IPosition;
}

export class SnakeSegments implements ISnakeSegments {
  id: string;
  position: IPosition;

  constructor(position: IPosition) {
    this.id = this.newId();
    this.position = position;
  }

  protected newId(): string {
    return generateRandomId();
  }
}
