import { getScenario } from "services/getScenario";
import { GlobalDomain } from "./domain";

export const loadScenario = GlobalDomain.effect("load-scenario", {
  handler: getScenario
});

loadScenario.fail.watch(({ error }) => {
  console.error(`Loading has failed: ${error.message}`);
});
