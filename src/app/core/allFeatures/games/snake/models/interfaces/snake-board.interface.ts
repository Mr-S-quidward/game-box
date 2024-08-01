import {IPosition} from "../../../../../models/interfaces/position.interface";

export interface ISnakeBoard {
  width: number;
  height: number;
  position: IPosition;
  obstacles?: IPosition[][];
}
