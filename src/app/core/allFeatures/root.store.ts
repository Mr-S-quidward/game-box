import {SnakeReducer} from "./games/snake/store/snake.reducer";
import {SnakeEffect} from "./games/snake/store/snake.effect";

export const _RootStore = {
  reducers: {
    'snake': SnakeReducer,
    // 'tetris': TetrisReducer,
    // 'minesweeper': MinesweeperReducer,
  },
  effects: [
    SnakeEffect,
  ]
}
