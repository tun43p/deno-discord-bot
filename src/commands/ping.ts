import { ApplicationCommandInteraction } from "../../deps.ts";

export default function pingCommand(aci: ApplicationCommandInteraction): void {
  const option = aci.option<string | undefined>("option");
  aci.reply(`Pong !\nYou typed ${option !== undefined ? option : "nothing"}.`);
}
