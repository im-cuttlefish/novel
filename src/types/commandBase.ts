export interface CommandBase {
  type: "system" | "form" | "character" | "background" | "textarea" | "sound";
  command: string;
  [key: string]: unknown;
}
