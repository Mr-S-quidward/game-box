import {TextInputModel} from "../../../inputs/textInputModel";
import {TextInputConfig} from "../../../models/configurations/inputs/text-input.config";

export const NewTextInput = (config: TextInputConfig): TextInputModel => (new TextInputModel(config));
