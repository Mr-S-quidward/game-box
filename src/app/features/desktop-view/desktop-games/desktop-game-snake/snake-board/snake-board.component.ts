import {Component, effect, ElementRef, EventEmitter, Input, Output, viewChild} from '@angular/core';
import {ISnakeBoard} from "../../../../../core/allFeatures/games/snake/models/interfaces/snake-board.interface";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'snake-board',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './snake-board.component.html',
  styleUrl: './snake-board.component.scss'
})
export class SnakeBoardComponent {
  @Input() lives$!: Observable<number>;
  @Input() score$!: Observable<number>;
  @Output() snakeBoardInitializeEmitter = new EventEmitter<ISnakeBoard>();
  snakeCrawlingField = viewChild.required<ElementRef<HTMLDivElement>>('snake_crawling_field');

  constructor() {
    effect(() => {
      this.emitSnakeBoardInitialize(this.snakeCrawlingField());
    });
  }

  emitSnakeBoardInitialize(el: ElementRef): void {
    const snakeBoard: ISnakeBoard = {
      width: el.nativeElement.getBoundingClientRect().width,
      height: el.nativeElement.getBoundingClientRect().height,
      position: {
        x: el.nativeElement.getBoundingClientRect().left,
        y: el.nativeElement.getBoundingClientRect().top,
      }
    }
    this.snakeBoardInitializeEmitter.emit(snakeBoard);
  }
}
