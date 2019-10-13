import { CommandBase } from "./commandBase";

export interface SetBackground extends CommandBase {
  type: "background";
  command: "set-background";
  name: string;
}

export type BackgroundCommand = SetBackground;
