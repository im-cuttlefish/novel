import { Character } from "./types";
import { createStore } from "effector";
import { currentCommand } from "effector/engine/store";

const initialState: Character[] = [];

const characterEvent = currentCommand.updates.filter({
  fn: ({ type }) => type === "character"
});

export const characterList = createStore(initialState).on(
  characterEvent,
  (state, payload) => {
    const { command } = payload;

    switch (command) {
      case "add-character": {
        const { name, image } = payload;
      }
    }
  }
);
