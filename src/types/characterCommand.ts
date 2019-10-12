import { CommandBase } from "./commandBase";

interface AddCharacter extends CommandBase {
  type: "character";
  command: "add-character";
  name: string;
  image: string;
}

interface RemoveCharacter extends CommandBase {
  type: "character";
  command: "remove-character";
  name: string;
}

interface ChangeImage extends CommandBase {
  type: "character";
  command: "change-image";
  name: string;
  image: string;
}

export type CharacterCommand = AddCharacter | RemoveCharacter | ChangeImage;
