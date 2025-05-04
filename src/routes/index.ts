import type { Route } from "../lib/vanilla-router"
import { Root, Home, About, AboutDetail, Weather, WeatherFiveDays } from "../pages"

export const routes: Route[] = [
  {
    path: "/",
    component: Root,
    errorComponent: () => "Error Root",
    children: [
      {
        path: "/",
        component: Home,
        errorComponent: () => "Error Home",
      },
      {
        path: "/weather",
        component: Weather,
        errorComponent: () => "Error Weather Main",
      },
      {
        path: `/weather/5day`,
        component: WeatherFiveDays,
        errorComponent: () => "Error Weather 5days Main",
      },
      {
        path: "about",
        component: About,
        errorComponent: () => "Error Home",
        children: [
          {
            path: ":id",
            component: AboutDetail,
            errorComponent: () => "Error About Nested",
          },
        ],
      },
    ],
  },
]
