import {SnakeMovementsEnum} from "../models/enums/snake-movements.enum";
import {SnakeStateModel} from "../models/snake-state.model";
import {createReducer, on} from "@ngrx/store";
import * as SnakeActions from "./snake.action";
import {IPosition} from "../../../../models/interfaces/position.interface";

export const initialSnakeState: SnakeStateModel = {
  board: {size: {x: 800, y: 800}},
  snake: [
    {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    {
      x: (window.innerWidth / 2) - 1,
      y: window.innerHeight / 2,
    },
    {
      x: (window.innerWidth / 2) - 2,
      y: window.innerHeight / 2,
    },
    {
      x: (window.innerWidth / 2) - 3,
      y: window.innerHeight / 2,
    },
  ],
  food: {x: 15, y: 15},
  score: 0,
  lives: 5,
  direction: SnakeMovementsEnum.right,
  isPlaying: false,
}

export const snakeReducer = createReducer(
  initialSnakeState,
  on(SnakeActions.startGame, state => ({
    ...state,
    isPlaying: true,
  })),
  on(SnakeActions.initializeBoard, state => ({
    ...state,
  })),
  on(SnakeActions.changeDirection, (state, {form}) => ({
    ...state,
    direction: form.direction,
  })),
  on(SnakeActions.moveSnake, state => {
    const newSnake = [...state.snake];
    const head = newSnake[0];
    let newHead;
    switch (state.direction) {
      case SnakeMovementsEnum.up:
        newHead = {x: head.x, y: head.y - 1};
        break;
      case SnakeMovementsEnum.down:
        newHead = {x: head.x, y: head.y + 1};
        break;
      case SnakeMovementsEnum.left:
        newHead = {x: head.x - 1, y: head.y};
        break;
      case SnakeMovementsEnum.right:
        newHead = {x: head.x + 1, y: head.y};
        break;
    }

    newSnake.unshift(newHead);
    newSnake.pop();

    return {
      ...state,
      snake: newSnake,
    }
  }),
  on(SnakeActions.eatFood, state => {
    const newFood = generateNewFood();
    const newSnake = [...state.snake, state.snake[state.snake.length - 1]];
    return {
      ...state,
      food: newFood,
      snake: newSnake,
      score: state.score + 10,
    }
  }),
  on(SnakeActions.loseLife, state => ({
    ...state,
    lives: state.lives - 1,
    isPlaying: state.lives > 1,
  })),
)

function generateNewFood(): IPosition {
  return {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
}
