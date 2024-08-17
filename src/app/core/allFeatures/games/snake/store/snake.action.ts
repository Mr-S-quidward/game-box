import {createAction, props} from "@ngrx/store";
import {SnakeActionsFormModel} from "../models/snake-actions-form.model";
import {ISnakeBoard} from "../models/interfaces/snake-board.interface";
import {makeActionType} from "../../../../store/base.action";

export const START_GAME_ACTION_TYPE = makeActionType('Snake', 'START_GAME');
export const INITIALIZE_BOARD_ACTION_TYPE = makeActionType('Snake', 'INITIALIZE_BOARD');
export const RUN_GAME_ACTION_TYPE = makeActionType('Snake', 'RUN_GAME');
export const PAUSE_GAME_ACTION_TYPE = makeActionType('Snake', 'PAUSE_GAME');
export const CHANGE_DIRECTION_ACTION_TYPE = makeActionType('Snake', 'CHANGE_DIRECTION');
export const MOVE_SNAKE_ACTION_TYPE = makeActionType('Snake', 'MOVE_SNAKE');
export const EAT_FOOD_ACTION_TYPE = makeActionType('Snake', 'EAT_FOOD');
export const LOSE_LIFE_ACTION_TYPE = makeActionType('Snake', 'LOSE_LIFE');
export const END_GAME_ACTION_TYPE = makeActionType('Snake', 'END_GAME');
export const DO_NOTHING_ACTION_TYPE = makeActionType('Snake', 'DO_NOTHING');

export const startGame = createAction(START_GAME_ACTION_TYPE, props<{ snakeBoard: ISnakeBoard }>());
export const initializeBoard = createAction(INITIALIZE_BOARD_ACTION_TYPE, props<{ snakeBoard: ISnakeBoard }>());
export const runGame = createAction(RUN_GAME_ACTION_TYPE, props<{ snakeBoard: ISnakeBoard }>());
export const pauseGame = createAction(PAUSE_GAME_ACTION_TYPE);
export const changeDirection = createAction(CHANGE_DIRECTION_ACTION_TYPE, props<{ form: SnakeActionsFormModel }>());
export const moveSnake = createAction(MOVE_SNAKE_ACTION_TYPE);
export const eatFood = createAction(EAT_FOOD_ACTION_TYPE);
export const loseLife = createAction(LOSE_LIFE_ACTION_TYPE, props<{ snakeBoard: ISnakeBoard }>());
export const endGame = createAction(END_GAME_ACTION_TYPE);

export const doNothing = createAction(DO_NOTHING_ACTION_TYPE);
