import {IPosition} from "../../../core/models/interfaces/position.interface";
import {IElementBoundingPoints} from "../../models/interfaces/element-bounding-points.interface";

function _crossProduct(A: IPosition, B: IPosition, P: IPosition) {
  return ((B.x - A.x) * (P.y - A.y)) - ((B.y - A.y) * (P.x - A.x));
}

export const ElementIntersecting = (el: IElementBoundingPoints, P: IPosition): boolean => {
  const ABP = _crossProduct(el.A, el.B, P);
  const BCP = _crossProduct(el.B, el.C, P);
  const CDP = _crossProduct(el.C, el.D, P);
  const DAP = _crossProduct(el.D, el.A, P);

  const allPositive = ABP >= 0 && BCP >= 0 && CDP >= 0 && DAP >= 0;
  const allNegative = ABP <= 0 && BCP <= 0 && CDP <= 0 && DAP <= 0;

  return allPositive || allNegative;
}

