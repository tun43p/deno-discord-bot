import {
  ApplicationCommandInteraction,
  Client,
  customValidation,
  event,
  isBotInVoiceChannel,
  isUserInVoiceChannel,
  slash,
} from "./deps.ts";

import cryptoCommand from "./src/commands/crypto.ts";
import helloCommand, { helloCommandCustomValidationMessage } from "./src/commands/hello.ts";
import joinCommand, { joinCommandIsUserInVoiceChannelMessage } from "./src/commands/join.ts";
import leaveCommand, { leaveCommandIsBotInVoiceChannelMessage } from "./src/commands/leave.ts";
import pingCommand from "./src/commands/ping.ts";

import commands from "./src/utils/commands.ts";
import { NAME, TOKEN } from "./src/utils/constants.ts";
import intents from "./src/utils/intents.ts";
import { usernameValidator } from "./src/utils/validators.ts";

export default class Bot extends Client {
  /**
   * Ready event - Start the bot.
   * @description Start the bot.
   * @template event
   * @returns {Promise<void>} Promise
   */
  @event()
  async ready(): Promise<void> {
    await this.interactions.commands.bulkEdit(commands).then(() => {
      console.log(`${NAME} is alive.`);
    }).catch((error) => console.error(error));
  }

  /**
   * Crypto command - View the crypto price based on EUR or USD.
   * @description View the crypto price based on EUR or USD.
   * @template slash
   * @param {ApplicationCommandInteraction} aci - ApplicationCommandInteraction
   * @returns {Promise<void>} Promise
   */
  @slash("crypto")
  async crypto(aci: ApplicationCommandInteraction): Promise<void> {
    await cryptoCommand(aci).catch((error) => console.error(error));
  }

  /**
   * Hello command - It's nice to be greeted.
   * @description It's nice to be greeted.
   * @template slash
   * @param {ApplicationCommandInteraction} aci - ApplicationCommandInteraction
   * @returns {void} void
   */
  @slash("hello")
  @customValidation((aci) => usernameValidator(aci), helloCommandCustomValidationMessage)
  hello(aci: ApplicationCommandInteraction): void {
    return helloCommand(aci);
  }

  /**
   * Join command - Make me join the voice channel you are currently in.
   * @description Make me join the voice channel you are currently in.
   * @template slash
   * @param {ApplicationCommandInteraction} aci - ApplicationCommandInteraction
   * @returns {Promise<void>} Promise
   */
  @slash("join")
  @isUserInVoiceChannel(joinCommandIsUserInVoiceChannelMessage)
  async join(aci: ApplicationCommandInteraction): Promise<void> {
    await joinCommand(aci).catch((error) => console.error(error));
  }

  /**
   * Leave command - Make me leave the current voice channel.
   * @description Make me leave the current voice channel.
   * @template slash
   * @param {ApplicationCommandInteraction} aci - ApplicationCommandInteraction
   * @returns {Promise<void>} Promise
   */
  @slash("leave")
  @isBotInVoiceChannel(leaveCommandIsBotInVoiceChannelMessage)
  async leave(aci: ApplicationCommandInteraction): Promise<void> {
    await leaveCommand(aci).catch((error) => console.error(error));
  }

  /**
   * Ping command - It's literally ping command.
   * @description It's literally ping command.
   * @template slash
   * @param {ApplicationCommandInteraction} aci - ApplicationCommandInteraction
   * @returns {void} void
   */
  @slash("ping")
  ping(aci: ApplicationCommandInteraction): void {
    return pingCommand(aci);
  }
}

new Bot().connect(TOKEN, intents);
