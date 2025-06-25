async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "6e42fd69b881d8a42efb79805ae89620";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.main) {
      document.getElementById("result").innerText =
        `Temperature in ${data.name}: ${data.main.temp}°C`;
    } else {
      document.getElementById("result").innerText =
        "City not found. Please enter a valid city.";
    }
  } catch (error) {
    document.getElementById("result").innerText =
      "Something went wrong. Please try again later.";
  }
}
