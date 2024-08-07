import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {filter, Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {SnakeMovementsEnum} from "../../../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";
import {SnakeActionsFormModel} from "../../../../../core/allFeatures/games/snake/models/snake-actions-form.model";
import {ISnakeSegments} from "../../../../../core/allFeatures/games/snake/models/interfaces/snake.interface";

@Component({
  selector: 'snake',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
  providers: [
    {provide: AsyncPipe},
  ]
})
export class SnakeComponent {
  @Input() snake$!: Observable<ISnakeSegments[]>;
  @Input() directions$!: Observable<SnakeMovementsEnum>;
  @Output() snakeChangeDirectionEmitter = new EventEmitter<SnakeActionsFormModel>();
  @Output() playEmitter = new EventEmitter<void>();
  @Output() pauseEmitter = new EventEmitter<void>();

  constructor(
    private asyncPipe: AsyncPipe,
  ) {
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.keyDownInteractionValidator(event)) {
      if (event.key === 'p' || event.key === 'P') {
        this.onKeyDownPause();
      } else if (event.key === 'Enter') {
        this.onKeyDownPlay();
      } else if (this.keyDownArrowsValidator(event)) {
        const nextDirection = event.key as SnakeMovementsEnum;
        this.emitSnakeChangeDirection(nextDirection);
      }
    }
  }

  protected keyDownInteractionValidator(ev: KeyboardEvent): boolean {
    const key: string = ev.key;
    const isArrowsKey: boolean = Object.keys(SnakeMovementsEnum)
      .map(key => SnakeMovementsEnum[key as keyof typeof SnakeMovementsEnum]).includes(ev.key as SnakeMovementsEnum);
    return (key === 'p' || key === 'P' || key === 'Enter' || isArrowsKey);
  }

  protected keyDownArrowsValidator(ev: KeyboardEvent): boolean {
    const allMoves: SnakeMovementsEnum[] = Object.keys(SnakeMovementsEnum).map(key => SnakeMovementsEnum[key as keyof typeof SnakeMovementsEnum]);
    const filterMoves = (list: SnakeMovementsEnum[], filter: SnakeMovementsEnum): SnakeMovementsEnum[] => list.filter(item => item !== filter);
    const prevDirection = this.asyncPipe.transform(this.directions$);
    const nextDirection = ev.key as SnakeMovementsEnum;
    if (!!prevDirection) switch (prevDirection) {
      case SnakeMovementsEnum.left:
        return filterMoves(allMoves, SnakeMovementsEnum.right).includes(nextDirection);
      case SnakeMovementsEnum.right:
        return filterMoves(allMoves, SnakeMovementsEnum.left).includes(nextDirection);
      case SnakeMovementsEnum.up:
        return filterMoves(allMoves, SnakeMovementsEnum.down).includes(nextDirection);
      case SnakeMovementsEnum.down:
        return filterMoves(allMoves, SnakeMovementsEnum.up).includes(nextDirection);
    } else return false;
  }

  onKeyDownPlay(): void {
    this.playEmitter.emit();
  }

  onKeyDownPause(): void {
    this.pauseEmitter.emit();
  }

  onClickPlayButton(ev: MouseEvent): void {
    ev.stopPropagation();
    this.playEmitter.emit();
  }

  onClickPauseButton(ev: MouseEvent): void {
    ev.stopPropagation();
    this.pauseEmitter.emit();
  }

  emitSnakeChangeDirection(direction: SnakeMovementsEnum): void {
    this.snakeChangeDirectionEmitter.emit({direction});
  }
}
