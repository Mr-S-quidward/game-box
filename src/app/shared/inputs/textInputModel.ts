import {BaseInput} from "./base.input";
import {ValidatorFn} from "@angular/forms";
import {TextInputConfig} from "../models/configurations/inputs/text-input.config";

export class TextInputModel extends BaseInput<string> {
  placeholder: string;
  appearance: "fill" | "outline";

  constructor(
    config: TextInputConfig,
  ) {
    super(config.inputLabel, config.inputName, config.validators);
    this.placeholder = config.placeholder ?? '';
    this.appearance =config.appearance ?? 'fill';
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
