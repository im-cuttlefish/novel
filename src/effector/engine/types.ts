import { Command } from "commands";

export type LoadingState = "loading" | "succeed" | "failed";

export interface CommandResult {
  done: Command;
}
