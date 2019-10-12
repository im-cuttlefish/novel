import { CharacterCommand } from "./characterCommand";
import { SystemCommand } from "./systemCommand";

export type Command = CharacterCommand | SystemCommand;

export interface Scenario {
  environment: Environment;
  commandList: Command[];
  configs: {
    character: CharacterConfig[];
  };
}

export interface Environment {
  width: number;
  height: number;
}

export interface CharacterConfig {
  name: string;
  width: number;
  height: number;
  images: {
    default: string;
    [s: string]: string;
  };
}
