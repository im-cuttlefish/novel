import { loadScenario } from "./event";
import { LoadingState } from "./types";
import { createStore, combine } from "effector";
import { Scenario } from "types";

const scenario = createStore<Scenario | null>(null)
  .on(loadScenario.done, (_, { result }) => result)
  .on(loadScenario.fail, (_, { error }) => console.error(error));

const current = createStore(0).reset(scenario.updates);

const commandList = scenario.map(store => (store && store.commandList) || []);

export const currentCommand = combine(
  commandList,
  current,
  (commandList, current) => commandList[current]
);

export const loading = createStore<LoadingState>("loading")
  .on(loadScenario.done, () => "succeed")
  .on(loadScenario.fail, () => "failed")
  .reset(loadScenario.pending);
