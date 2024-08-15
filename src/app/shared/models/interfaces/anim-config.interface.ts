export interface IAnimConfig {
  anchor: string;
  duration?: number;
  delay?: number;
  method?: string;
}

export interface ITextGlowAnimConfig extends IAnimConfig {
  color?: string;
}
