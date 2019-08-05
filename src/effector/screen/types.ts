import { CharacterConfig } from "types";

export interface Character {
  config: CharacterConfig;
  usedImage: string;
  point: [number, number];
}
