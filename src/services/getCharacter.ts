import body from "assets/taro/body.png";
import { CharacterConfig } from "types";

const mock: CharacterConfig = {
  name: "stella",
  images: {
    default: body
  }
};

export const getCharacter = async () => {
  return mock;
};
