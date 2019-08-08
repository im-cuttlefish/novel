interface CommandBase {
  type: "system" | "form" | "character" | "textarea" | "sound";
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
  command: "remove-character";
  name: string;
}

interface RegisterID extends CommandBase {
  type: "system";
  command: "register-id";
}

interface ShowChoices extends CommandBase {
  type: "form";
  command: "show-choices";
  choices: { [id: string]: string };
}

export type Command = AddCharacter | RemoveCharacter | RegisterID | ShowChoices;
