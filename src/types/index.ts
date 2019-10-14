import { CharacterCommand } from "./characterCommand";
import { SystemCommand } from "./systemCommand";
import { BackgroundCommand } from "./backgroundCommand";
import { MessageCommand } from "./messageCommand";

export type Command =
  | CharacterCommand
  | SystemCommand
  | BackgroundCommand
  | MessageCommand;

export interface Scenario {
  environment: Environment;
  commandList: Command[];
  configs: {
    character: CharacterConfig[];
    background: BackgroundConfig[];
    message: MessageConfig[];
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

export interface MessageConfig {
  name: string;
  width: number;
  height: number;
  image?: string;
  padding: [number, number, number, number];
}
