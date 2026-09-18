document.addEventListener("DOMContentLoaded", () => {
  const canStatus = document.getElementById("can-status");
  const valSpeed = document.getElementById("val-speed");
  const valDistance = document.getElementById("val-distance");
  const valUltrasonic = document.getElementById("val-ultrasonic");

  // Function to fetch live data from server/broker endpoint
  async function fetchTelemetry() {
    try {
      const response = await fetch("https://your-api-endpoint.com/telemetry");
      const data = await response.json();

      // Update Dashboard UI
      canStatus.textContent = "CAN: Online";
      canStatus.classList.remove("offline");
      canStatus.style.backgroundColor = "#22c55e";

      valSpeed.textContent = `${data.speed} km/h`;
      valDistance.textContent = `${data.distance} m`;
      valUltrasonic.textContent = `${data.ultrasonic} cm`;
    } catch (error) {
      console.error("Telemetry connection error:", error);
      canStatus.textContent = "CAN: Offline";
    }
  }

  // Poll for updates every second
  setInterval(fetchTelemetry, 1000);
});
