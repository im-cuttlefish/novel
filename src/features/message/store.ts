import { currentCommand } from "features/system/store";
import { messageDomain } from "./domain";

const messageEvent = currentCommand.updates.filterMap(payload =>
  payload.type === "message" ? payload : undefined
);

export const message = messageDomain
  .store("")
  .on(messageEvent, (_, payload) => payload.content);
