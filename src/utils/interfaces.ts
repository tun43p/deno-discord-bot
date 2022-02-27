export interface Crypto {
  name: string;
  price: number;
  symbol: CryptoCompareSymbol;
}

export enum CryptoCompare {
  EUR = "eur",
  USD = "usd",
}

export enum CryptoCompareSymbol {
  EUR = "€",
  USD = "$",
}

export interface CryptoObject {
  [name: string]: {
    [compare: string]: number;
  };
}
