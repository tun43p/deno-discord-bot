import { ApplicationCommandInteraction } from "../../deps.ts";

export const joinCommandIsUserInVoiceChannelMessage = "You must be in a voice channel to use this command.";

export default async function joinCommand(aci: ApplicationCommandInteraction): Promise<void> {
  if (!aci.guild) return;
  const vs = await aci.guild.voiceStates.get(aci.user.id);
  if (!vs?.channel) return;
  const res = await vs.channel.join({ deaf: true });
  if (res === undefined) aci.reply("Failed to join the voice channel.");
  else aci.reply("I joined the voice channel.");
}
