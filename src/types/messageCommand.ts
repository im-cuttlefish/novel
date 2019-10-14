import { CommandBase } from "./commandBase";

interface WriteOn extends CommandBase {
  type: "message";
  command: "write-on";
  name: string;
  content: string;
}

interface Erase extends CommandBase {
  type: "message";
  command: "erase";
  name: string;
}

interface Hide extends CommandBase {
  type: "message";
  command: "hide";
  name: string;
}

export type MessageCommand = WriteOn | Erase | Hide;
