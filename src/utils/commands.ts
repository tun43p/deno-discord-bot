import { ApplicationCommandOptionType, ApplicationCommandPartial } from "../../deps.ts";

const commands: ApplicationCommandPartial[] = [
  {
    name: "crypto",
    description: "View the crypto price based on EUR or USD.",
    options: [
      {
        name: "name",
        description: "Specify a crypto name. Example: bitcoin, solana, etc.",
        required: true,
        type: ApplicationCommandOptionType.STRING,
      },
      {
        name: "compare",
        description: "Specify the currency to compare between eur or usd. Default: usd.",
        required: false,
        type: ApplicationCommandOptionType.STRING,
      },
    ],
  },
  {
    name: "hello",
    description: "It's nice to be greeted.",
    options: [
      {
        name: "traget",
        description: "Who are you greeting ?",
        required: false,
        type: ApplicationCommandOptionType.STRING,
      },
    ],
  },
  { name: "join", description: "Make me join the voice channel you are currently in." },
  { name: "leave", description: "Make me leave the current voice channel." },
  {
    name: "ping",
    description: "It's literally a ping command.",
    options: [
      {
        name: "option",
        description: "Again literally an option.",
        required: false,
        type: ApplicationCommandOptionType.STRING,
      },
    ],
  },
];

export default commands;
