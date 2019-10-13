import { CharacterCommand } from "./characterCommand";
import { SystemCommand } from "./systemCommand";
import { BackgroundCommand } from "./backgroundCommand";

export type Command = CharacterCommand | SystemCommand | BackgroundCommand;

export interface Scenario {
  environment: Environment;
  commandList: Command[];
  configs: {
    character: CharacterConfig[];
    background: BackgroundConfig[];
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

export interface BackgroundConfig {
  name: string;
  image: string;
}
