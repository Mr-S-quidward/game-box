import {IAnimConfig} from "../models/interfaces/anim-config.interface";

export const animateTimings =
  (options?: IAnimConfig): string =>
    `${(options?.duration ?? '300') + 'ms'} ${options?.delay ?? '' + (options?.delay ? 'ms' : '')} ${options?.method ?? 'ease-out'}`;
