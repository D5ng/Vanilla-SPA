import { Component } from "../lib/component"
import { Link } from "../lib/vanilla-router"
import { fetchWeatherData, type WeatherData } from "../service"
import { formatDate } from "../utils/formatDate"

interface WeatherState {
  isLoading: boolean
  data: Partial<WeatherData>
}

export default class Weather extends Component<{}, WeatherState> {
  init() {
    this.state = {
      isLoading: true,
      data: {},
    }

    const fetcher = async () => {
      this.setState({ ...this.state, isLoading: true })
      try {
        const responseData = await fetchWeatherData()
        this.setState({ isLoading: false, data: responseData })
      } catch (error) {
        throw new Error((error as Error).message || "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
      }
    }

    fetcher()
  }

  template(): string {
    if (this.state.isLoading) {
      return `
        <p>Loading...</p>
      `
    }

    const { temp, temp_min, temp_max } = this.state.data.main!

    return `
      <div>
      ${Link({
        to: "/weather/5day",
        children: `
        <div class="border border-gray-300 w-[60%] mx-auto p-5 rounded-md mt-8">
          <h1 class="font-bold text-2xl">${this.state.data.name}</h1>
          <span class="text-sm text-gray-400">${formatDate(this.state.data.dt!, this.state.data.timezone!)}</span>
          <div class="flex items-center">  
            <div class="w-1/2 h-[50px]">
              <img src="https://openweathermap.org/img/wn/${this.state.data.weather![0].icon}.png" alt=${
          this.state.data.weather![0].description
        } class="object-cover object-center" />
            </div>
              <div>
                  <div>
                    <span class="text-sm text-gray-500">현재</span>
                    <div class="text-sm text-gray-600"><b>${temp}°C</b></div>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">최저/최고</span>
                    <div class="text-sm text-gray-600"><b>${temp_min}°C / ${temp_max}°C</b></div>
                  </div>
              </div>
            </div>
          </div>
        `,
      })}
      </div>
    `
  }
}
