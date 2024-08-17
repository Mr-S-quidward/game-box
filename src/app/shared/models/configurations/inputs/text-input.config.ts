import {ValidatorFn} from "@angular/forms";

export interface TextInputConfig {
  inputName: string;
  inputLabel: string;
  validators?: ValidatorFn | ValidatorFn[];
  placeholder?: string;
  appearance?: "fill" | "outline";
}
