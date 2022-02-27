import { ApplicationCommandInteraction } from "../../deps.ts";

export const leaveCommandIsBotInVoiceChannelMessage = "I'm not in a voice channel.";

export default async function leaveCommand(aci: ApplicationCommandInteraction): Promise<void> {
  if (!aci.guild || !aci.client.user?.id) return;
  const vs = await aci.guild.voiceStates.get(aci.client.user.id);
  if (!vs?.channel) return;
  await vs.channel.leave();
  aci.reply("I left the voice channel.");
}
