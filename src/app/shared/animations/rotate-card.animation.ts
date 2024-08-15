import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";
import {IAnimConfig} from "../models/interfaces/anim-config.interface";
import {animateTimings} from "./base.animation";

export const rotateCardAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? 'rotateCard', [
    state('default', style({transform: 'rotateY(0)'})),
    state('hover', style({transform: 'rotateY(180deg)'})),
    transition('default <=> hover', [
      animate(animateTimings(options)),
    ]),
  ]);
}
