export const fetchGoldPrice = async () => {
  const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/GC=F');
  const data = await response.json();
  let price = data.chart.result[0].meta.regularMarketPrice;
  price = price / 31.1035; // Convert to grams price
  return price;
}