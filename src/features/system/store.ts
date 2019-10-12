import { update } from "./events";
import { combine } from "effector";
import { scenario } from "../global/store";
import { SystemDomain } from "./domain";

const commandList = scenario.map(store => (store && store.commandList) || []);

const current = SystemDomain.store(0)
  .reset(commandList.updates)
  .on(update, index => {
    const list = commandList.getState();

    if (list.length - 1 > index + 1) {
      console.error("Engine stopped: There is no command anymore.");
      return;
    }

    return index + 1;
  });

export const currentCommand = combine(
  commandList,
  current,
  (commandList, current) => commandList[current]
);
