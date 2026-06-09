const FINNHUB_API_KEY = "d8g1579r01qmctb47l50d8g1579r01qmctb47l5g";
const TWELVE_DATA_API_KEY = "2fbeccfdb04e4594941ede63fe367365";

export type StockData = {
  symbol: string;
  logo: string;
  change: number;
};

export async function getStockData(
  symbol: string
): Promise<StockData> {
  try {
    const [profileRes, quoteRes] = await Promise.all([
      fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`
      ),
      fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
      ),
    ]);

    const profile = await profileRes.json();
    const quote = await quoteRes.json();

    return {
      symbol,
      logo: profile.logo,
      change: quote.dp, // Daily percentage change
    };
  } catch (error) {
    console.error(error);

    return {
      symbol,
      logo: "",
      change: 0,
    };
  }
}