import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";
import {IAnimConfig} from "../models/interfaces/Anim-Config.interface";

export const fadeInAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeIn", [
    state("void", style({opacity: 0, scale: 0.5})),
    transition(":enter", [
      animate(`${(options?.duration ?? '300') + 'ms'} ${options?.delay ?? '' + (options?.delay ? 'ms' : '')} ${options?.method ?? 'ease-in'}`,
        style({opacity: 1, scale: 1})),
    ]),
  ]);
}

export const fadeOutAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeOut", [
    transition(":leave", [
      animate(`${(options?.duration ?? '300') + 'ms'} ${options?.delay ?? '' + (options?.delay ? 'ms' : '')} ${options?.method ?? 'ease-out'}`,
        style({opacity: 0, scale: 1.5})),
    ]),
  ]);
}

export const fadeInOutAnimation = (options?: IAnimConfig): AnimationTriggerMetadata => {
  return trigger(options?.anchor ?? "fadeInOut", [
    transition(":enter", [
      style({opacity: 0, scale: 0.5}),
      animate(`${(options?.duration ?? '300') + 'ms'} ${options?.delay ?? '' + (options?.delay ? 'ms' : '')} ${options?.method ?? 'ease-in'}`,
        style({opacity: 1, scale: 1})),
    ]),
    transition(":leave", [
      animate(`${(options?.duration ?? '300') + 'ms'} ${options?.delay ?? '' + (options?.delay ? 'ms' : '')} ${options?.method ?? 'ease-out'}`,
        style({opacity: 0, scale: 1.5})),
    ]),
  ]);
}
