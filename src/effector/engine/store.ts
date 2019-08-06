import { loadScenario, update } from "./event";
import { LoadingState } from "./types";
import { createStore, combine } from "effector";
import { Scenario } from "types";

export const scenario = createStore<Scenario | null>(null)
  .on(loadScenario.done, (_, { result }) => result)
  .on(loadScenario.fail, (_, { error }) => console.error(error));

const commandList = scenario.map(store => (store && store.commandList) || []);

const current = createStore(0)
  .on(update, (index, { done }) => {
    const list = commandList.getState();

    if (list.length - 1 > index + 1) {
      console.error("Engine has stopped: There is no command anymore.");
      return;
    }

    const next = index + 1;
    return next;
  })
  .reset(scenario.updates);

export const currentCommand = combine(
  commandList,
  current,
  (commandList, current) => commandList[current]
);

export const loading = createStore<LoadingState>("loading")
  .on(loadScenario.done, () => "succeed")
  .on(loadScenario.fail, () => "failed")
  .reset(loadScenario.pending);
