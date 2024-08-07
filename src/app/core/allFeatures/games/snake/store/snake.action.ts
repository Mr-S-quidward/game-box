import {createAction, props} from "@ngrx/store";
import {SnakeActionsFormModel} from "../models/snake-actions-form.model";
import {ISnakeBoard} from "../models/interfaces/snake-board.interface";

const makeActionType = (actionType: string): string => {
  return `[Snake] ${actionType}`;
}

const START_GAME_ACTION_TYPE = makeActionType('START_GAME');
const INITIALIZE_BOARD_ACTION_TYPE = makeActionType('INITIALIZE_BOARD');
const RUN_GAME_ACTION_TYPE = makeActionType('RUN_GAME');
const PAUSE_GAME_ACTION_TYPE = makeActionType('PAUSE_GAME');
const CHANGE_DIRECTION_ACTION_TYPE = makeActionType('CHANGE_DIRECTION');
const MOVE_SNAKE_ACTION_TYPE = makeActionType('MOVE_SNAKE');
const EAT_FOOD_ACTION_TYPE = makeActionType('EAT_FOOD');
const LOSE_LIFE_ACTION_TYPE = makeActionType('LOSE_LIFE');
const END_GAME_ACTION_TYPE = makeActionType('END_GAME');
const DO_NOTHING_ACTION_TYPE = makeActionType('DO_NOTHING');

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
