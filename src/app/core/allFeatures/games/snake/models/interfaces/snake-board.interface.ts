import {IPosition} from "../../../../../models/interfaces/position.interface";

export interface ISnakeBoard {
  size: IPosition;
  obstacles?: IPosition[][];
}
