document.getElementById('calculate-revenue-button').addEventListener('click', calculateRevenue);

function calculateRevenue() {
  const adType = document.getElementById('adType').value;
  const impressions = parseInt(document.getElementById('impressions').value);
  const clicks = parseInt(document.getElementById('clicks').value);

  if (isNaN(impressions) || isNaN(clicks)) {
    document.getElementById('result').innerHTML = 'Please enter valid numbers for Impressions and Clicks.';
    return;
  }

  let totalRevenue = 0;

  if (adType === 'adsense') {
    const cpm = 5; // Example CPM for demonstration
    const cpc = 0.5; // Example CPC for demonstration

    totalRevenue = (impressions * (cpm / 1000)) + (clicks * cpc);
  } else if (adType === 'amazon') {
    // Perform Amazon Affiliate calculations based on provided fields
    // Update logic based on how the Amazon Affiliate revenue is calculated
    // Example calculation:
    const conversionRate = (clicks / impressions) * 100; // Conversion rate in percentage
    const averageSaleAmount = 50;
    const commissionRate = 0.1;

    totalRevenue = (conversionRate * averageSaleAmount * commissionRate) / 100;
  }

  document.getElementById('result').innerHTML = `Estimated Revenue: $${totalRevenue.toFixed(2)}`;
}
