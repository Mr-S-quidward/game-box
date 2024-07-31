import {Component, Input} from '@angular/core';
import {IPosition} from "../../../../../core/models/interfaces/position.interface";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'snake-food',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './snake-food.component.html',
  styleUrl: './snake-food.component.scss'
})
export class SnakeFoodComponent {
  @Input() food$!: Observable<IPosition>;
}
