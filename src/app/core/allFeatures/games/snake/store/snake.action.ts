import {createAction, props} from "@ngrx/store";
import {SnakeActionsFormModel} from "../models/snake-actions-form.model";

export const startGame = createAction('[Snake] Start Game');
export const initializeBoard = createAction('[Snake] Initialize Board');
export const changeDirection = createAction('[Snake] Change Direction', props<{ form: SnakeActionsFormModel }>());
export const moveSnake = createAction('[Snake] Move Snake');
export const eatFood = createAction('[Snake] Eat Food');
export const loseLife = createAction('[Snake] Lose Life');
export const endGame = createAction('[Snake] End Game');
