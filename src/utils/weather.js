// Fetch weather by city name
export function getWeatherByCity(cb) {
  if (!navigator.geolocation) {
        return;
    }
    navigator.geolocation.getCurrentPosition(
        async(position) => {
            const lat= position.coords.latitude
            const lon= position.coords.longitude
            // Fetch weather using standard Fetch API (Javascript)
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
            const res = await fetch(url);
            const data = await res.json();
            cb(data)
        },
        (err) => {
        setError(err.message);
        }
    );
}