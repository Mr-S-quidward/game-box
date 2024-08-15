import {BaseInput} from "./base.input";
import {ValidatorFn} from "@angular/forms";

export class TextInputModel extends BaseInput<string> {
  placeholder: string;
  appearance: "fill" | "outline";

  constructor(
    inputName: string,
    inputLabel: string,
    validators: ValidatorFn | ValidatorFn[] = [],
    placeholder: string = '',
    appearance: "fill" | "outline" = "fill",
  ) {
    super(inputName, inputLabel, validators);
    this.placeholder = placeholder;
    this.appearance = appearance;
  }

  override setValue(value: string, emitEvent: boolean = true): TextInputModel {
    super.setValue(value, emitEvent);
    return this;
  }

  override addValidators(validators: ValidatorFn | ValidatorFn[], emitEvent: boolean = false): TextInputModel {
    super.addValidators(validators, emitEvent);
    return this;
  }

  override removeValidators(validators: ValidatorFn | ValidatorFn[], emitEvent: boolean = false): TextInputModel {
    super.removeValidators(validators, emitEvent);
    return this;
  }
}
