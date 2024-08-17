import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";
import {ITextGlowAnimConfig} from "../models/interfaces/anim-config.interface";
import {animateTimings} from "./base.animation";

export const textGlowAnimation = (option?: ITextGlowAnimConfig): AnimationTriggerMetadata => {
  return trigger(option?.anchor ?? 'textGlow', [
    state('start', style({
      textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f',
      color: '#ff007f'
    })),
    state('end', style({
      textShadow: '0 0 20px #00ff7f, 0 0 30px #00ff7f, 0 0 40px #00ff7f',
      color: '#00ff7f'
    })),
    transition("start <=> end", [
      animate(
        animateTimings(!!option ? {
            ...option,
            method: "ease-in-out",
          } : {
            anchor: "",
            method: "ease-in-out",
          }
        ),
      ),
    ]),
  ]);
}
