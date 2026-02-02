import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const madeUpData = {
    "Toronto": {
        description: "Sunny",
        temperature: "3",
        windspeed: "14 kmph"
    },
    "Vancouver": {
        description: "Cloudy",
        temperature: "6",
        windspeed: "2 kmph"
    },
    "Montreal": {
        description: "Stormy",
        temperature: "17",
        windspeed: "20 kmph"
    },
    "Halifax": {
        description: "Rainy",
        temperature: "0",
        windspeed: "9 kmph"
    }
}

app.post("/api/weather", (request, response) => {
    let city = request.body.city;
    console.log(city);

    response.json(
        {
            description: madeUpData[city].description,
            temperature: madeUpData[city].temperature,
            windspeed: madeUpData[city].windspeed,
        })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})