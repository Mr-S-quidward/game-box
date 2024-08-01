import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {IPosition} from "../../../../../core/models/interfaces/position.interface";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {SnakeMovementsEnum} from "../../../../../core/allFeatures/games/snake/models/enums/snake-movements.enum";
import {SnakeActionsFormModel} from "../../../../../core/allFeatures/games/snake/models/snake-actions-form.model";

@Component({
  selector: 'snake',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {
  @Input() snake$!: Observable<IPosition[]>;
  @Output() snakeChangeDirectionEmitter = new EventEmitter<SnakeActionsFormModel>();

  @HostListener("window:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent): void {
    const isArrowsKey: boolean = Object.keys(SnakeMovementsEnum)
      .map(key => SnakeMovementsEnum[key as keyof typeof SnakeMovementsEnum]).includes(event.key as SnakeMovementsEnum);
    if (isArrowsKey) {
      const direction = event.key as SnakeMovementsEnum;
      this.emitSnakeChangeDirection(direction);
    }
  }

  emitSnakeChangeDirection(direction: SnakeMovementsEnum): void {
    this.snakeChangeDirectionEmitter.emit({direction});
  }
}
