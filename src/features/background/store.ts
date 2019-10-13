import { scenario } from "features/global/store";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { backgroundDomain } from "./domain";

const backgroundEvent = currentCommand.updates.filterMap(payload =>
  payload.type === "background" ? payload : undefined
);

export const background = backgroundDomain
  .store<string | null>(null)
  .on(backgroundEvent, (_, payload) => {
    const { configs } = scenario.getState()!;
    const config = configs.background;

    switch (payload.command) {
      case "set-background": {
        const { name } = payload;
        const asset = config.find(x => x.name === name);

        if (!asset) {
          console.error(`Background Error: "${name}" isn't defined.`);
          return;
        }

        setTimeout(update, 1000);

        return asset.image;
      }
    }
  });
