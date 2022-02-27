import { ApplicationCommandInteraction } from "../../deps.ts";

export const helloCommandCustomValidationMessage = "Hello to me !";

export default function helloCommand(aci: ApplicationCommandInteraction): void {
  aci.reply(`Hello to you !`);
}
