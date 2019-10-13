import body from "assets/taro/body.png";
import smile from "assets/taro/body.copy.png";
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
    command: "add-character",
    name: "hanako",
    image: "default"
  },
  {
    type: "character",
    command: "change-image",
    name: "hanako",
    image: "smile"
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
    images: { default: body, smile }
  },
  {
    name: "hanako",
    width: 313,
    height: 510,
    images: { default: body, smile }
  }
];

export const mock: Scenario = {
  environment,
  commandList,
  configs: { character }
};
