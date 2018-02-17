export interface Token {
  id: string;
  decimals: string;
  contract_address: string;
  symbol: string;
  name: string;
  image_url: string;
  price_usd: number;
  percent_change_24h: number;
}

export interface TokenWithBalance extends Token {
  balance: number;
}
