import { currentCommand } from "features/system/store";
import { Character } from "./types";
import { characterDomain } from "./domain";
import { createCharacter } from "./utils/createCharacter";
import { update } from "features/system/events";

const initialState: Character[] = [];

const characterEvent = currentCommand.updates.filterMap(payload =>
  payload.type === "character" ? payload : undefined
);

export const characterList = characterDomain
  .store(initialState)
  .on(characterEvent, (state, payload) => {
    switch (payload.command) {
      case "add-character": {
        const { name, image } = payload;
        const added = createCharacter(name, image);
        setTimeout(update, 1000);

        return [...state, added];
      }

      case "remove-character": {
        const { name } = payload;
        const exists = state.some(x => x.config.name === name);

        if (!exists) {
          console.error(`Character Error: character "${name}" is not added.`);
          return;
        }

        setTimeout(update);

        return state.filter(x => x.config.name !== name);
      }

      case "change-image": {
        const { name, image } = payload;
        const exists = state.some(x => x.config.name === name);

        if (!exists) {
          console.error(`Character Error: character "${name}" is not added.`);
          return;
        }

        setTimeout(update);

        return state.map(x => {
          if (x.config.name !== name) {
            return x;
          }

          x.usedImage = image;
          return x;
        });
      }
    }
  });
