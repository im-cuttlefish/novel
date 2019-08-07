import { createEffect } from "effector";
import { Scenario } from "types";
import { getScenario } from "services/getScenario";

export const loadScenario = createEffect<string, Scenario>("load-scenario", {
  handler: getScenario
});

loadScenario.fail.watch(({ error }) => {
  console.error(`Loading has failed: ${error.message}`);
});
