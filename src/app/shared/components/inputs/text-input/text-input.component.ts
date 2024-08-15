import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TextInputModel} from "../../../inputs/textInputModel";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {debounceTime} from "rxjs";
import {
  SubscriptionManagementService
} from "../../../../core/services/subscription-management/subscription-management.service";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    ReactiveFormsModule,
    MatSuffix,
    MatIcon,
    MatIconButton,
    MatTooltip,
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent implements OnInit {
  @Input() input!: TextInputModel;
  @Input() password: boolean = false;
  @Input() autocomplete: boolean = false;
  @Output() onChange = new EventEmitter<void>();
  tempValue: string | null = null;

  constructor(
    private subscriptionService: SubscriptionManagementService,
  ) {
  }

  ngOnInit(): void {
    const sub = this.input.formControl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(change => {
      if (change) this.onChange.emit();
    });
    this.subscriptionService.registerSubscription(sub);
  }

  onClickInputActionBtn(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.input.setValue('');
  }

  onFocusin(): void {
    this.setTempValue();
  }

  onFocusout(): void {
    this.getTempValue();
  }

  private getTempValue(): void {
    if (this.tempValue && this.tempValue.length > 0 && this.input.getValue().length === 0)
      this.input.setValue(this.tempValue, false);
  }

  private setTempValue(): void {
    this.tempValue = this.input.getValue();
    this.input.setValue('', false);
  }
}
