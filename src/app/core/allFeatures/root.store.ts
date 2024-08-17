import {SnakeReducer} from "./games/snake/store/snake.reducer";
import {SnakeEffects} from "./games/snake/store/snake-effects";
import {AuthReducer} from "./auth/store/auth.reducer";
import {AuthEffects} from "./auth/store/auth.effect";

export const _RootStore = {
  reducers: {
    'auth': AuthReducer,
    'snake': SnakeReducer,
    // 'tetris': TetrisReducer,
    // 'minesweeper': MinesweeperReducer,
  },
  effects: [
    AuthEffects,
    SnakeEffects,
  ]
}
