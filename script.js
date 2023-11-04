// Calculate revenue when the user clicks the "Calculate" button
document.getElementById('calculate-revenue-button').addEventListener('click', calculateRevenue);

function calculateRevenue() {
  const adType = document.getElementById('adType').value;
  const adRevenue = parseFloat(document.getElementById('adRevenue').value);
  const views = parseInt(document.getElementById('views').value);

  if (isNaN(adRevenue) || isNaN(views)) {
    document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    return;
  }

  let totalRevenue = 0;

  if (adType === 'adsense') {
    const clicks = (views / 100) * 3;
    const revenuePerClick = 0.2;
    totalRevenue = clicks * revenuePerClick;
  } else if (adType === 'amazon') {
    const conversionRate = (views / 100) * 5;
    const averageSaleAmount = 50;
    const commissionRate = 0.1;
    totalRevenue = conversionRate * averageSaleAmount * commissionRate;
  }

  document.getElementById('result').innerHTML = `Estimated Revenue: $${totalRevenue.toFixed(2)}`;
}
