import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {SnakeActionModel} from "../../../../../core/allFeatures/games/snake/models/enums/snake-action.model";

@Component({
  selector: 'snake-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './snake-modal.component.html',
  styleUrl: './snake-modal.component.scss'
})
export class SnakeModalComponent {
  constructor(
    private dialogRef: MatDialogRef<SnakeModalComponent>,
  ) {
  }

  closeModal(): void {
    this.dialogRef.close(SnakeActionModel.resetGame);
  }
}
