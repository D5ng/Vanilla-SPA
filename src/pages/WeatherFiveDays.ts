import WeatherList from "../components/WeatherList"
import { Component } from "../lib/component"
import { fetchWeather5dayData } from "../service/weather"
import { WeatherFiveDaysType } from "../service/weather.type"

interface WeatherFiveState {
  isLoading: boolean
  data: Partial<WeatherFiveDaysType>
}

export default class WeatherFiveDays extends Component<{}, WeatherFiveState> {
  init() {
    this.state = {
      isLoading: true,
      data: {},
    }

    const fetcher = async () => {
      this.setState({ ...this.state, isLoading: true })
      try {
        const responseData = await fetchWeather5dayData()
        this.setState({ isLoading: false, data: responseData })
      } catch (error) {
        throw new Error((error as Error).message || "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
      }
    }

    fetcher()
  }

  componentDidMount(): void {
    if (this.state.data.list) {
      const weatherSection = this.element.querySelector("[data-element='weather-section']")! as HTMLElement
      new WeatherList({ target: weatherSection, props: { list: this.state.data.list || [] } })
    }
  }

  template(): string {
    if (this.state.isLoading) {
      return `
        <p>Loading...</p>
      `
    }

    return `
      <section data-element="weather-section"></section>
    `
  }
}
