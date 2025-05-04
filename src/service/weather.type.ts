// 공통 타입
export interface Coord {
  lon: number
  lat: number
}

export interface WeatherDescription {
  id: number
  main: string
  description: string
  icon: string
}

export interface MainWeatherData {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
  temp_kf?: number
}

export interface Wind {
  speed: number
  deg: number
  gust?: number
}

export interface Clouds {
  all: number
}

export interface WeatherData {
  coord: Coord
  weather: WeatherDescription[]
  base: string
  main: MainWeatherData
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: SysInfo
  timezone: number
  id: number
  name: string
  cod: number
}

export interface SysInfo {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherFiveDaysType {
  cod: string
  message: number
  cnt: number
  list: WeatherFiveDaysItem[]
  city: WeatherFiveDaysCity
}

export interface WeatherFiveDaysItem {
  dt: number
  main: MainWeatherData
  weather: WeatherDescription[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: { "3h": number }
  sys: { pod: "d" | "n" }
  dt_txt: string
}

export interface WeatherFiveDaysCity {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}
