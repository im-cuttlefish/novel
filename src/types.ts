import { Command } from "commands";

export interface Scenario {
  width: number;
  height: number;
  commandList: Command[];
  configs: {
    character: CharacterConfig[];
  };
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
