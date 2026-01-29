import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const madeUpData = {
    description: "Sunny",
    tmperature: "3",
    windspeed: "14 kmph"
}

app.post("/api/weather", (request, response) => {
    let selectedCity = request.body.city;
    console.log(selectedCity);

    response.json({})
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})