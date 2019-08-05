import { Command } from "commands";

export type LoadingState = "loading" | "succeed" | "failed";

export interface CommandState {
  commandList: Command[];
  current: number;
}
