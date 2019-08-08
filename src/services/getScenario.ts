import body from "assets/taro/body.png";
import { CharacterConfig, Scenario } from "types";
import { Command } from "commands";

const commandList: Command[] = [
  {
    type: "character",
    command: "add-character",
    name: "taro",
    image: "default"
  },
  {
    type: "character",
    command: "remove-character",
    name: "taro"
  }
];

const character: CharacterConfig[] = [
  {
    name: "taro",
    width: 313,
    height: 510,
    images: { default: body }
  }
];

const mock: Scenario = {
  width: 1000,
  height: 600,
  commandList,
  configs: { character }
};

export const getScenario = async (_url: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mock;
};
