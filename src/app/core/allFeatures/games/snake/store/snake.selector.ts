import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";

export const SnakeStateSelector: string = "snake";

export const selectSnakeState = createFeatureSelector<SnakeStateModel>(SnakeStateSelector);
export const getSnakeLives = createSelector(selectSnakeState, (state) => state.lives);
