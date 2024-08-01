import {createAction, props} from "@ngrx/store";
import {SnakeActionsFormModel} from "../models/snake-actions-form.model";
import {ISnakeBoard} from "../models/interfaces/snake-board.interface";

export const startGame = createAction('[Snake] Start Game', props<{ snakeBoard: ISnakeBoard }>());
export const initializeBoard = createAction('[Snake] Initialize Board', props<{ snakeBoard: ISnakeBoard }>());
export const changeDirection = createAction('[Snake] Change Direction', props<{ form: SnakeActionsFormModel }>());
export const moveSnake = createAction('[Snake] Move Snake');
export const eatFood = createAction('[Snake] Eat Food');
export const loseLife = createAction('[Snake] Lose Life', props<{ snakeBoard: ISnakeBoard }>());
export const endGame = createAction('[Snake] End Game');
