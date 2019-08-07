import body from "assets/taro/body.png";
import { CharacterConfig, Scenario } from "types";
import { Command } from "commands";

const commandList: Command[] = [
  {
    type: "character",
    command: "add-character",
    name: "taro",
    image: "default"
  }
];

const character: CharacterConfig[] = [
  {
    name: "taro",
    images: { default: body }
  }
];

const mock: Scenario = {
  width: 800,
  height: 600,
  commandList,
  configs: { character }
};

export const getScenario = (_url: string) => {
  return mock;
};
