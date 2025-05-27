function getLocation() {
  if (!navigator.geolocation) {
    document.getElementById("output").textContent = "Geolocation not supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const result = `Lat: ${latitude.toFixed(5)}, Long: ${longitude.toFixed(5)}`;
  document.getElementById("output").textContent = result;
}

function error(err) {
  document.getElementById("output").textContent = "Location error: " + err.message;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("Service Worker error:", err));
}
