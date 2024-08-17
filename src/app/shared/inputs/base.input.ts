import {FormControl, ValidatorFn} from "@angular/forms";
import {ErrorMessagesEnum} from "../models/enums/error-messages.enum";

export class BaseInput<T> {
  formControl: FormControl<T | null>;
  inputName: string;
  inputLabel: string;
  validators: ValidatorFn | ValidatorFn[];

  constructor(
    inputName: string,
    inputLabel: string,
    validators: ValidatorFn | ValidatorFn[] = [],
  ) {
    this.formControl = new FormControl<T | null>(null, validators);
    this.inputName = inputName.toLowerCase();
    this.inputLabel = inputLabel;
    this.validators = validators;
  }

  getValue(): T {
    return this.formControl.value!;
  }

  setValue(value: T, emitEvent: boolean = true): BaseInput<T> {
    this.formControl.setValue(value, {emitEvent: emitEvent});
    return this;
  }

  addValidators(validators: ValidatorFn | ValidatorFn[], emitEvent: boolean = false): BaseInput<T> {
    this.formControl.addValidators(validators);
    this.formControl.updateValueAndValidity({emitEvent: emitEvent});
    return this;
  }

  removeValidators(validators: ValidatorFn | ValidatorFn[], emitEvent: boolean = false): BaseInput<T> {
    this.formControl.removeValidators(validators);
    this.formControl.updateValueAndValidity({emitEvent: emitEvent});
    return this;
  }

  invalid(): boolean {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }

  errors(): string | null {
    if (!this.formControl) return null;
    for (const errorKey in this.formControl.errors) {
      if (this.formControl.errors.hasOwnProperty(errorKey)) {
        return ErrorMessagesEnum[errorKey as keyof typeof ErrorMessagesEnum] || null;
      }
    }
    return null;
  }
}
