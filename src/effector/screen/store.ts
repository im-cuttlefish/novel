import { Character } from "./types";
import { createStore } from "effector";
import { v4 as generate } from "uuid";
import { currentCommand } from "effector/engine/store";
import { configs } from "effector/loader/store";

const initialState: Character[] = [];

const characterEvent = currentCommand.updates.filterMap(payload =>
  payload.type === "character" ? payload : undefined
);

export const characterList = createStore(initialState).on(
  characterEvent,
  (state, payload) => {
    switch (payload.command) {
      case "add-character": {
        const { name, image } = payload;
        const { character } = configs.getState()!;
        const config = character.find(x => x.name === name);

        if (!config) {
          console.error(`Character Error: character "${name}" is not defined.`);
          return;
        }

        const id = generate();
        const added: Character = { config, id, usedImage: image };
        return [...state, added];
      }

      case "remove-character": {
        const { name } = payload;
        const existsCharacter = state.find(x => x.config.name === name);

        if (!existsCharacter) {
          console.error(`Character Error: character "${name}" is not added.`);
          return;
        }

        return state.filter(x => x.config.name !== name);
      }
    }
  }
);
