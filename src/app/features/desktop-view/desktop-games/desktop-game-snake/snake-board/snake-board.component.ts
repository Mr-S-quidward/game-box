import {AfterViewInit, Component, effect, ElementRef, EventEmitter, Input, Output, viewChild} from '@angular/core';
import {ISnakeBoard} from "../../../../../core/allFeatures/games/snake/models/interfaces/snake-board.interface";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'snake-board',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIcon
  ],
  templateUrl: './snake-board.component.html',
  styleUrl: './snake-board.component.scss'
})
export class SnakeBoardComponent implements AfterViewInit {
  @Input() lives$!: Observable<number>;
  @Input() score$!: Observable<number>;
  @Output() snakeBoardInitializeEmitter = new EventEmitter<ISnakeBoard>();
  snakeCrawlingField = viewChild.required<ElementRef<HTMLDivElement>>('snake_crawling_field');

  showInfo: boolean = true;
  showingInfoTime: number = 3000;
  infoList: { exp: string, icon: string }[] = [
    {exp: "TO GO UP Press", icon: "arrow_upward"},
    {exp: "TO GO DOWN Press", icon: "arrow_downward"},
    {exp: "TO GO LEFT Press", icon: "arrow_back"},
    {exp: "TO GO RIGHT Press", icon: "arrow_forward"},
    {exp: "TO PAUSE THE GAME Press 'P'", icon: ""},
    {exp: "TO RESET THE GAME Press 'R'", icon: ""},
    {exp: "TO RESUME THE GAME Press Enter", icon: ""},
  ];

  constructor() {
    effect(() => {
      this.emitSnakeBoardInitialize(this.snakeCrawlingField());
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.showInfo = false, this.showingInfoTime);
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
