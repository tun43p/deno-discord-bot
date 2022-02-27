import { ApplicationCommandInteraction } from "../../deps.ts";

import { Crypto, CryptoCompare, CryptoCompareSymbol, CryptoObject } from "../utils/interfaces.ts";

async function getCryptoPrice(name: string, compare: string | undefined): Promise<Crypto> {
  if (compare === undefined || !compare.includes(CryptoCompare.EUR || CryptoCompare.USD)) compare = CryptoCompare.USD;

  const res: CryptoObject = await (await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=${compare}`,
  ))
    .json();

  return {
    name: name.replace(/^\w/, (i) => i.toUpperCase()),
    price: res[name][compare],
    symbol: compare === CryptoCompare.EUR ? CryptoCompareSymbol.EUR : CryptoCompareSymbol.USD,
  };
}

export default async function cryptoCommand(aci: ApplicationCommandInteraction): Promise<void> {
  const name = aci.option<string>("name");
  const compare = aci.option<string | undefined>("compare");
  const data = await getCryptoPrice(name.toLowerCase(), compare);
  aci.reply(`${data.name}: ${data.price}${data.symbol}`);
}
