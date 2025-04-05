import { fetcher } from "../utils"
import { WeatherData } from "./weather.type"

export async function fetchWeatherData() {
  const responseData = await fetcher<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${import.meta.env.WEATHER_API_KEY}`,
  )
  return responseData
}
