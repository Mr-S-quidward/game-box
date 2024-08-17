import {createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";

export const selectSnakeState
  : MemoizedSelector<object, SnakeStateModel, DefaultProjectorFn<SnakeStateModel>>
  = createFeatureSelector<SnakeStateModel>("snake");

export const getSnake = createSelector(
  selectSnakeState,
  s => s.snake,
);
export const getSnakeFood = createSelector(
  selectSnakeState,
  s => s.food,
);
export const getSnakeLives = createSelector(
  selectSnakeState,
  s => s.lives
);
export const getSnakeScore = createSelector(
  selectSnakeState,
  s => s.score,
);
export const getIsPlaying = createSelector(
  selectSnakeState,
  s => s.isPlaying,
);
export const getSnakeBoard = createSelector(
  selectSnakeState,
  s => s.board,
);
export const getSnakeDirection = createSelector(
  selectSnakeState,
  s => s.direction,
);
