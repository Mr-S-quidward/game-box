import {Component, OnInit} from '@angular/core';
import {SnakeBoardComponent} from "./snake-board/snake-board.component";
import {SnakeComponent} from "./snake/snake.component";
import {SnakeFoodComponent} from "./snake-food/snake-food.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../../../../core/allFeatures/games/snake/models/snake-state.model";
import {getSnake, getSnakeFood, getSnakeScore} from "../../../../core/allFeatures/games/snake/store/snake.selector";
import {IPosition} from "../../../../core/models/interfaces/position.interface";
import {SnakeMovementsEnum} from "../../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";
import * as SnakeActions from "../../../../core/allFeatures/games/snake/store/snake.action";
import {SnakeActionsFormModel} from "../../../../core/allFeatures/games/snake/models/snake-actions-form.model";

@Component({
  selector: 'desktop-game-snake',
  standalone: true,
  imports: [
    SnakeBoardComponent,
    SnakeComponent,
    SnakeFoodComponent
  ],
  templateUrl: './desktop-game-snake.component.html',
  styleUrl: './desktop-game-snake.component.scss'
})
export class DesktopGameSnakeComponent implements OnInit {
  snake$: Observable<IPosition[]>;
  food$: Observable<IPosition>;
  score$: Observable<number>;

  constructor(
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
    this.snake$ = snakeStore.select(getSnake);
    this.food$ = snakeStore.select(getSnakeFood);
    this.score$ = snakeStore.select(getSnakeScore);
  }

  ngOnInit(): void {
    this.snakeStore.dispatch(SnakeActions.initializeBoard());
  }


  manageActions(form: SnakeActionsFormModel): void {
    this.snakeStore.dispatch(SnakeActions.changeDirection({form}));
  }
}
