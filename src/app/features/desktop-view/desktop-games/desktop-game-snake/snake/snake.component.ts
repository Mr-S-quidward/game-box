import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {SnakeMovementsEnum} from "../../../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";
import {SnakeActionsFormModel} from "../../../../../core/allFeatures/games/snake/models/snake-actions-form.model";
import {ISnakeSegments} from "../../../../../core/allFeatures/games/snake/models/interfaces/snake.interface";
import {MatIcon} from "@angular/material/icon";
import {fadeInOutAnimation, fadeOutAnimation} from "../../../../../shared/animations/fade.animation";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'snake',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
  providers: [
    {provide: AsyncPipe},
  ],
  animations: [
    fadeOutAnimation(),
    fadeInOutAnimation(),
  ]
})
export class SnakeComponent implements OnInit {
  @Input() lives$!: Observable<number>;
  @Input() snake$!: Observable<ISnakeSegments[]>;
  @Input() directions$!: Observable<SnakeMovementsEnum>;
  @Input() isPlaying$!: Observable<boolean>;
  @Output() snakeChangeDirectionEmitter = new EventEmitter<SnakeActionsFormModel>();
  @Output() playEmitter = new EventEmitter<void>();
  @Output() pauseEmitter = new EventEmitter<void>();
  @Output() resetEmitter = new EventEmitter<void>();

  showBtns: boolean = true;
  hideTimeout: any;

  constructor(
    private asyncPipe: AsyncPipe,
  ) {
  }

  ngOnInit() {
    this.hideButtonAfterDelay();
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.keyDownInteractionValidator(event)) {
      if (event.key === 'p' || event.key === 'P') {
        this.onKeyDownPause();
      } else if (event.key === 'r' || event.key === 'R') {
        this.onKeyDownReset();
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
    return (key === 'p' || key === 'P' || key === 'r' || key === 'R' || key === 'Enter' || isArrowsKey);
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
    this.hideButtonAfterDelay();
    this.playEmitter.emit();
  }

  onKeyDownPause(): void {
    this.hideButtonAfterDelay();
    this.pauseEmitter.emit();
  }

  onKeyDownReset(): void {
    this.hideButtonAfterDelay();
    this.resetEmitter.emit();
  }

  onClickPlayButton(ev: MouseEvent): void {
    ev.stopPropagation();
    this.hideButtonAfterDelay();
    this.playEmitter.emit();
  }

  onClickPauseButton(ev: MouseEvent): void {
    ev.stopPropagation();
    this.hideButtonAfterDelay();
    this.pauseEmitter.emit();
  }

  emitSnakeChangeDirection(direction: SnakeMovementsEnum): void {
    this.snakeChangeDirectionEmitter.emit({direction});
  }

  hideButtonAfterDelay(): void {
    this.showBtns = true;
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    this.hideTimeout = setTimeout(() => {
      this.showBtns = false;
    }, 1000); // 2000 ms = 2 seconds
  }
}
