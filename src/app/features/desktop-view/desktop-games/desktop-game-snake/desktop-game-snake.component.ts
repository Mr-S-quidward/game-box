import {Component, OnInit} from '@angular/core';
import {SnakeBoardComponent} from "./snake-board/snake-board.component";
import {SnakeComponent} from "./snake/snake.component";
import {SnakeFoodComponent} from "./snake-food/snake-food.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../../../../core/allFeatures/games/snake/models/snake-state.model";
import {
  getIsPlaying,
  getSnake, getSnakeBoard, getSnakeDirection,
  getSnakeFood, getSnakeLives,
  getSnakeScore
} from "../../../../core/allFeatures/games/snake/store/snake.selector";
import {IPosition} from "../../../../core/models/interfaces/position.interface";
import * as SnakeActions from "../../../../core/allFeatures/games/snake/store/snake.action";
import {SnakeActionsFormModel} from "../../../../core/allFeatures/games/snake/models/snake-actions-form.model";
import {AsyncPipe} from "@angular/common";
import {ISnakeBoard} from "../../../../core/allFeatures/games/snake/models/interfaces/snake-board.interface";
import {ISnakeSegments} from "../../../../core/allFeatures/games/snake/models/interfaces/snake.interface";
import {SnakeMovementsEnum} from "../../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";
import {ActionsManagementService} from "../../../../core/services/manage-actions/actions-management.service";
import {IActionManagement} from "../../../../core/models/interfaces/action-management.interface";
import {SnakeActionModel} from "../../../../core/allFeatures/games/snake/models/enums/snake-action.model";

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
  providers: [
    {provide: AsyncPipe},
  ],
})
export class DesktopGameSnakeComponent implements OnInit, IActionManagement<SnakeActionModel> {
  snake$: Observable<ISnakeSegments[]>;
  food$: Observable<IPosition>;
  score$: Observable<number>;
  lives$: Observable<number>;
  isPlaying$: Observable<boolean>;
  snakeBoard$: Observable<ISnakeBoard>;
  direction$: Observable<SnakeMovementsEnum>;

  constructor(
    private snakeStore: Store<{ snake: SnakeStateModel }>,
    private asyncPipe: AsyncPipe,
    private actionManagementService: ActionsManagementService<SnakeActionModel, any>
  ) {
    this.isPlaying$ = snakeStore.select(getIsPlaying);
    this.snake$ = snakeStore.select(getSnake);
    this.food$ = snakeStore.select(getSnakeFood);
    this.score$ = snakeStore.select(getSnakeScore);
    this.lives$ = snakeStore.select(getSnakeLives);
    this.snakeBoard$ = snakeStore.select(getSnakeBoard);
    this.direction$ = snakeStore.select(getSnakeDirection);
  }

  ngOnInit(): void {
    this.registerActions();
  }

  registerActions(): void {
    this.actionManagementService.registerActions([
      {type: SnakeActionModel.startGame, action: this.onStartGame.bind(this)},
      {type: SnakeActionModel.playGame, action: this.onPlayGame.bind(this)},
      {type: SnakeActionModel.pauseGame, action: this.onPauseGame.bind(this)},
      {type: SnakeActionModel.resetGame, action: this.onResetGame.bind(this)},
      {type: SnakeActionModel.changeSnakeDirection, action: this.onChangeSnakeDirection.bind(this)},
    ]);
  }

  handleActions(actionType: SnakeActionModel, ...args: any[]): void {
    this.actionManagementService.manageActions(actionType, ...args);
  }

  onResetGame(): void {
    this.snakeStore.dispatch(SnakeActions.startGame({snakeBoard: this.asyncPipe.transform(this.snakeBoard$)!}));
  }

  onStartGame(snakeBoard: ISnakeBoard): void {
    this.snakeStore.dispatch(SnakeActions.startGame({snakeBoard}));
  }

  onPlayGame(): void {
    this.snakeStore.dispatch(SnakeActions.runGame({snakeBoard: this.asyncPipe.transform(this.snakeBoard$)!}));
  }

  onPauseGame(): void {
    this.snakeStore.dispatch(SnakeActions.pauseGame());
  }

  onChangeSnakeDirection(form: SnakeActionsFormModel): void {
    this.snakeStore.dispatch(SnakeActions.changeDirection({form}));
  }

  protected readonly SnakeActionModel = SnakeActionModel;
}
