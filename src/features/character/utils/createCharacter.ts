import { v4 as generate } from "uuid";
import { scenario } from "features/global/store";
import { Character } from "../types";

export const createCharacter = (name: string, image: string): Character => {
  const { configs } = scenario.getState()!;
  const { character } = configs;
  const config = character.find(x => x.name === name);

  if (!config) {
    throw new Error(`Character Error: character "${name}" is not defined.`);
  }

  const id = generate();
  return { config, id, usedImage: image };
};
