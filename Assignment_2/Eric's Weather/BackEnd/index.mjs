import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const apiKey = "ad8ff9c1d0248c79798e040100845c10";



app.post("/api/weather", async (request, response) => {
    const city = request.body.city;
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const weatherRequest = await fetch(requestURL);
    const weatherData = await weatherRequest.json();

    response.json({
        description: weatherData.weather[0].description,
        temperature: weatherData.main.temp,
        windspeed: weatherData.wind.speed
    })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})