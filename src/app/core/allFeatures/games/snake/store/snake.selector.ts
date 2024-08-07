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
export const getIsPlaying = createSelector(
  SnakeStateSelector,
  s => s.isPlaying,
);
export const getSnakeBoard = createSelector(
  SnakeStateSelector,
  s => s.board,
);
export const getSnakeDirection = createSelector(
  SnakeStateSelector,
  s => s.direction,
);
