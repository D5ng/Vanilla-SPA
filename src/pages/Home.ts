import dayjs from "dayjs"
import "dayjs/locale/ko"
import { Component } from "../lib/component"
import { fetchWeatherData, type WeatherData } from "../service"

interface WeatherState {
  isLoading: boolean
  data: Partial<WeatherData>
}

export default class Home extends Component<{}, WeatherState> {
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
        <h1>${dayjs().format("YYYY-MM-DD")}</h1>
        <div>
          <span>현재</span>
          <div><b>${temp}</b></div>
        </div>
        <div>
          <span>최저/최고</span>
          <div><b>${temp_min} / ${temp_max}</b></div>
        </div>
      </div>
    `
  }
}
