import { Scenario } from "types";
import { createEffect } from "effector";

export const loadScenario = createEffect<string, Scenario>();
