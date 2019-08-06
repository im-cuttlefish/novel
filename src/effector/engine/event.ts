import { createEffect, createEvent } from "effector";
import { Scenario } from "types";
import { CommandResult } from "./types";

export const loadScenario = createEffect<string, Scenario>();
export const update = createEvent<CommandResult>();
