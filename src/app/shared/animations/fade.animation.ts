import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";
import {IAnimConfig} from "../models/interfaces/anim-config.interface";
import {animateTimings} from "./base.animation";

export const fadeInAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeIn", [
    state("void", style({opacity: 0, scale: 0.5})),
    transition(":enter", [
      animate(animateTimings(options),
        style({opacity: 1, scale: 1})),
    ]),
  ]);
}

export const fadeOutAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeOut", [
    transition(":leave", [
      animate(animateTimings(options),
        style({opacity: 0, scale: 1.5})),
    ]),
  ]);
}

export const fadeInOutAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeInOut", [
    transition(":enter", [
      style({opacity: 0, scale: 0.5}),
      animate(animateTimings(options),
        style({opacity: 1, scale: 1})),
    ]),
    transition(":leave", [
      animate(animateTimings(options),
        style({opacity: 0, scale: 1.5})),
    ]),
  ]);
}
