import {createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";

export const SnakeStateSelector: MemoizedSelector<object, SnakeStateModel, DefaultProjectorFn<SnakeStateModel>> = createFeatureSelector<SnakeStateModel>("snake");

export const getSnake = createSelector(
  SnakeStateSelector,
  s => s.snake,
);
export const getSnakeFood = createSelector(
  SnakeStateSelector,
  s => s.food,
);
export const getSnakeLives = createSelector(
  SnakeStateSelector,
  s => s.lives
);
export const getSnakeScore = createSelector(
  SnakeStateSelector,
  s => s.score,
);
