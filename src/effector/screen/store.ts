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
    const { command } = payload;

    switch (command) {
      case "add-character": {
        const { name, image } = payload;
        const { character } = configs.getState()!;
        const config = character.find(x => x.name === name);

        if (!config) {
          console.error("Character Error: Called character isn't defined.");
          return;
        }

        const id = generate();
        const added: Character = { config, id, usedImage: image };
        return [...state, added];
      }
    }
  }
);
