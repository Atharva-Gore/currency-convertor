const apiUrl = "https://api.exchangerate.host/latest?base=USD";
const tableBody = document.getElementById("currencyTable");

async function loadCurrencies() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const rates = data.rates;

    // Top 100 most-used currencies (ISO code to country mapping)
    const currencies = [
      { code: "USD", country: "United States" },
      { code: "EUR", country: "European Union" },
      { code: "JPY", country: "Japan" },
      { code: "GBP", country: "United Kingdom" },
      { code: "INR", country: "India" },
      { code: "AUD", country: "Australia" },
      { code: "CAD", country: "Canada" },
      { code: "CHF", country: "Switzerland" },
      { code: "CNY", country: "China" },
      { code: "HKD", country: "Hong Kong" },
      { code: "SGD", country: "Singapore" },
      { code: "KRW", country: "South Korea" },
      { code: "ZAR", country: "South Africa" },
      { code: "BRL", country: "Brazil" },
      { code: "MXN", country: "Mexico" },
      { code: "SEK", country: "Sweden" },
      { code: "NOK", country: "Norway" },
      { code: "DKK", country: "Denmark" },
      { code: "RUB", country: "Russia" },
      { code: "NZD", country: "New Zealand" },
      { code: "THB", country: "Thailand" },
      { code: "MYR", country: "Malaysia" },
      { code: "IDR", country: "Indonesia" },
      { code: "PHP", country: "Philippines" },
      { code: "PLN", country: "Poland" },
      { code: "TRY", country: "Turkey" },
      { code: "EGP", country: "Egypt" },
      { code: "AED", country: "United Arab Emirates" },
      { code: "SAR", country: "Saudi Arabia" },
      { code: "PKR", country: "Pakistan" },
      { code: "TWD", country: "Taiwan" },
      { code: "VND", country: "Vietnam" },
      { code: "BDT", country: "Bangladesh" },
      { code: "ILS", country: "Israel" },
      { code: "ARS", country: "Argentina" },
      { code: "COP", country: "Colombia" },
      { code: "CLP", country: "Chile" },
      { code: "CZK", country: "Czech Republic" },
      { code: "HUF", country: "Hungary" },
      { code: "RON", country: "Romania" },
      { code: "UAH", country: "Ukraine" },
      { code: "KES", country: "Kenya" },
      { code: "NGN", country: "Nigeria" },
      { code: "GHS", country: "Ghana" },
      { code: "LKR", country: "Sri Lanka" },
      { code: "MMK", country: "Myanmar" },
      { code: "QAR", country: "Qatar" },
      { code: "KWD", country: "Kuwait" },
      { code: "BHD", country: "Bahrain" },
      // ... you can add up to 100
    ];

    currencies.forEach((currency, index) => {
      const rate = rates[currency.code];
      if (rate) {
        const row = `
          <tr>
            <td>${index + 1}</td>
            <td>${currency.country}</td>
            <td>${currency.code}</td>
            <td>${rate.toFixed(4)}</td>
          </tr>`;
        tableBody.innerHTML += row;
      }
    });
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="4">⚠️ Failed to fetch data</td></tr>`;
  }
}

window.onload = loadCurrencies;
