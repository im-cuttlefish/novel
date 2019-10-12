export interface CommandBase {
  type: "system" | "form" | "character" | "textarea" | "sound";
  command: string;
  [key: string]: unknown;
}
