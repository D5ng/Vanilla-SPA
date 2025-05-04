import { Component } from "../lib/component"
import { WeatherFiveDaysCity, WeatherFiveDaysItem } from "../service/weather.type"
import { formatISODate } from "../utils/formatDate"

interface Props {
  list: WeatherFiveDaysItem[]
}

export default class WeatherList extends Component<Props> {
  template() {
    console.log(this.props)
    return `
      <ul>
        ${this.props.list.map((item) => {
          const { temp, temp_min, temp_max } = item.main
          return `
            <li>
              <div class="border border-gray-300 w-[60%] mx-auto p-5 rounded-md mt-8">
                <span class="text-sm text-gray-400">${formatISODate(item.dt_txt)}</span>
                <div class="flex items-center">  
                  <div class="w-1/2 h-[50px]">
                    <img src="https://openweathermap.org/img/wn/${item.weather![0].icon}.png" alt=${
            item.weather![0].description
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
            </li> 
          `
        })}
      </ul>
    `
  }
}
