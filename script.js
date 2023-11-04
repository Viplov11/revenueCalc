(adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: "ca-pub-1712982817970790",
  enable_page_level_ads: true
});

// Get the ad container element
const adContainer = document.getElementById('ad-container');

// Create an ad slot
const adSlot = new google.ads.dfp.AdSlot(adContainer, 'ca-pub-1712982817970790');

// Request an ad
adSlot.display();

// Calculate revenue when the user clicks the "Calculate" button
document.getElementById('calculate-revenue-button').addEventListener('click', calculateRevenue);

function calculateRevenue() {
  // Get the ad type, ad revenue, and views from the user input
  const adType = document.getElementById('adType').value;
  const adRevenue = parseFloat(document.getElementById('adRevenue').value);
  const views = parseInt(document.getElementById('views').value);

  // Validate the user input
  if (isNaN(adRevenue) || isNaN(views)) {
    document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    return;
  }

  // Calculate the total revenue
  let totalRevenue = 0;

  if (adType === 'adsense') {
    // Google AdSense hypothetical calculation based on a fixed rate per click
    const clicks = (views / 100) * 3; // Assuming a click-through rate of 3%
    const revenuePerClick = 0.2; // Hypothetical revenue per click
    totalRevenue = clicks * revenuePerClick;
  } else if (adType === 'amazon') {
    // Amazon Affiliate hypothetical calculation based on a percentage of sale
    const conversionRate = (views / 100) * 5; // Assuming a conversion rate of 5%
    const averageSaleAmount = 50; // Hypothetical average sale amount
    const commissionRate = 0.1; // Hypothetical commission rate (10%)
    totalRevenue = conversionRate * averageSaleAmount * commissionRate;
  }

  // Display the total revenue
  document.getElementById('result').innerHTML = `Estimated Revenue: $${totalRevenue.toFixed(2)}`;
}
