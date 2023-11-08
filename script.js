document.getElementById('calculate-revenue-button').addEventListener('click', calculateRevenue);

function calculateRevenue() {
  const impressions = parseInt(document.getElementById('impressions').value);
  const clicks = parseInt(document.getElementById('clicks').value);

  if (isNaN(impressions) || isNaN(clicks)) {
    document.getElementById('result').innerHTML = 'Please enter valid numbers for Impressions and Clicks.';
    return;
  }

  const cpm = 5; // Example CPM for demonstration
  const cpc = 0.5; // Example CPC for demonstration

  const totalRevenue = (impressions * (cpm / 1000)) + (clicks * cpc);

  document.getElementById('result').innerHTML = `Estimated Revenue: $${totalRevenue.toFixed(2)}`;
}
