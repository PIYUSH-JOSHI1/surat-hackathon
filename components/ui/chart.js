export class Chart {
  constructor(ctx, config) {
    if (typeof Chart !== "undefined" && typeof Chart.register === "function") {
      // Chart.js v3+
      Chart.register(...(config.plugins || []))
      return new Chart(ctx, config)
    } else {
      // Chart.js v2 or no Chart.js
      console.warn("Chart.js is not properly loaded or is an older version. Some chart features might not work.")
      return null
    }
  }
}

