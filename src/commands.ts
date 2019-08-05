interface CommandBase {
  type: "character" | "textarea" | "sound";
  command: string;
}

interface AddCharacter extends CommandBase {
  type: "character";
  command: "add-character";
  name: string;
  image: string;
}

interface RemoveCharacter extends CommandBase {
  type: "character";
  command: "add-character";
  name: string;
  image: string;
}

export type Command = AddCharacter | RemoveCharacter;
