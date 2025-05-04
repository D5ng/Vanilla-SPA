import { fetcher } from "../utils"
import { WeatherData, WeatherFiveDaysType } from "./weather.type"

export async function fetchWeatherData() {
  const responseData = await fetcher<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`,
  )
  return responseData
}

export async function fetchWeather5dayData() {
  const responseData = await fetcher<WeatherFiveDaysType>(
    `https://api.openweathermap.org/data/2.5/forecast?q=Seoul,kr&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`,
  )

  console.log(responseData)

  return responseData
}
