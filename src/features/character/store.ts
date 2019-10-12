import { v4 as generate } from "uuid";
import { scenario } from "features/global/store";
import { currentCommand } from "features/system/store";
import { Character } from "./types";
import { CharacterDomain } from "./domain";
import { createCharacter } from "./utils/createCharacter";

const initialState: Character[] = [];

const characterEvent = currentCommand.updates.filterMap(payload =>
  payload.type === "character" ? payload : undefined
);

export const characterList = CharacterDomain.store(initialState).on(
  characterEvent,
  (state, payload) => {
    switch (payload.command) {
      case "add-character": {
        const { name, image } = payload;
        const added = createCharacter(name, image);
        return [...state, added];
      }

      case "remove-character": {
        const { name } = payload;
        const exists = state.some(x => x.config.name === name);

        if (!exists) {
          console.error(`Character Error: character "${name}" is not added.`);
          return;
        }

        return state.filter(x => x.config.name !== name);
      }

      case "change-image": {
        const { name, image } = payload;
        const exists = state.some(x => x.config.name === name);

        if (!exists) {
          console.error(`Character Error: character "${name}" is not added.`);
          return;
        }
      }
    }
  }
);
