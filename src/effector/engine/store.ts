import { update } from "./events";
import { createStore, combine } from "effector";
import { scenario } from "../loader/store";

const commandList = scenario.map(store => (store && store.commandList) || []);

const current = createStore(0)
  .reset(scenario.updates)
  .on(update, index => {
    const list = commandList.getState();

    if (list.length - 1 > index + 1) {
      console.error("Engine has stopped: There is no command anymore.");
      return;
    }

    const next = index + 1;
    return next;
  });

export const currentCommand = combine(
  commandList,
  current,
  (commandList, current) => commandList[current]
);
