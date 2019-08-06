interface CommandBase<T = null> {
  type: "system" | "form" | "character" | "textarea" | "sound";
  command: string;
  result: T;
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

interface ShowChoices extends CommandBase<string> {
  type: "form";
  command: "show-choices";
  choices: { [id: string]: string };
}

export type Command = AddCharacter | RemoveCharacter | ShowChoices;
