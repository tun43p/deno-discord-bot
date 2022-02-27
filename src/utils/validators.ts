import { ApplicationCommandInteraction } from "../../deps.ts";

export function usernameValidator(aci: ApplicationCommandInteraction): boolean {
  if (!aci.client.user?.username) return false;
  return ["bot", aci.client.user?.username].includes(aci.option<string>("target"));
}
