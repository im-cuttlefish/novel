import body from "assets/taro/body.png";
import { Command, CharacterConfig, Scenario, Environment } from "types";

const environment: Environment = {
  width: 1000,
  height: 600
};

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

export const mock: Scenario = {
  environment,
  commandList,
  configs: { character }
};
