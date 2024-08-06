import {Component, OnInit} from '@angular/core';
import {SnakeBoardComponent} from "./snake-board/snake-board.component";
import {SnakeComponent} from "./snake/snake.component";
import {SnakeFoodComponent} from "./snake-food/snake-food.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../../../../core/allFeatures/games/snake/models/snake-state.model";
import {
  getIsPlaying,
  getSnake,
  getSnakeFood, getSnakeLives,
  getSnakeScore
} from "../../../../core/allFeatures/games/snake/store/snake.selector";
import {IPosition} from "../../../../core/models/interfaces/position.interface";
import * as SnakeActions from "../../../../core/allFeatures/games/snake/store/snake.action";
import {SnakeActionsFormModel} from "../../../../core/allFeatures/games/snake/models/snake-actions-form.model";
import {AsyncPipe} from "@angular/common";
import {ISnakeBoard} from "../../../../core/allFeatures/games/snake/models/interfaces/snake-board.interface";
import {ISnakeSegments} from "../../../../core/allFeatures/games/snake/models/interfaces/snake.interface";

@Component({
  selector: 'desktop-game-snake',
  standalone: true,
  imports: [
    SnakeBoardComponent,
    SnakeComponent,
    SnakeFoodComponent,
    AsyncPipe,
  ],
  templateUrl: './desktop-game-snake.component.html',
  styleUrl: './desktop-game-snake.component.scss',
})
export class DesktopGameSnakeComponent implements OnInit {
  snake$: Observable<ISnakeSegments[]>;
  food$: Observable<IPosition>;
  score$: Observable<number>;
  lives$: Observable<number>;
  isPlaying$: Observable<boolean>;

  constructor(
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
    this.isPlaying$ = snakeStore.select(getIsPlaying);
    this.snake$ = snakeStore.select(getSnake);
    this.food$ = snakeStore.select(getSnakeFood);
    this.score$ = snakeStore.select(getSnakeScore);
    this.lives$ = snakeStore.select(getSnakeLives);
  }

  ngOnInit(): void {
  }

  onStartGame(snakeBoard: ISnakeBoard): void {
    this.snakeStore.dispatch(SnakeActions.startGame({snakeBoard}));
  }


  manageActions(form: SnakeActionsFormModel): void {
    this.snakeStore.dispatch(SnakeActions.changeDirection({form}));
  }
}
