import { createStore } from "effector";
import { loadScenario } from "./events";
import { LoadingState } from "./types";
import { Scenario } from "types";

export const scenario = createStore<Scenario | null>(null)
  .on(loadScenario.done, (_, { result }) => result)
  .on(loadScenario.fail, () => null);

export const configs = scenario.map(state => state && state.configs);

export const loading = createStore<LoadingState>("loading")
  .on(loadScenario.done, () => "succeed")
  .on(loadScenario.fail, () => "failed")
  .reset(loadScenario.pending);
