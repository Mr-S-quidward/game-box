import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {SnakeActionModel} from "../../../../../core/allFeatures/games/snake/models/enums/snake-action.model";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'snake-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    AsyncPipe
  ],
  templateUrl: './snake-modal.component.html',
  styleUrl: './snake-modal.component.scss'
})
export class SnakeModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ISnakeModalData,
    private dialogRef: MatDialogRef<SnakeModalComponent>,
  ) {
  }

  closeModal(): void {
    this.dialogRef.close(SnakeActionModel.resetGame);
  }
}

export interface ISnakeModalData {
  score$: Observable<number>;
}
