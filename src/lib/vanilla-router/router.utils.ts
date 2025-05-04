import type { Route, RouteWithParams } from "./router.type"

export function normalizePath(path: string) {
  return path.replace(/^\/?/, "")
}

export function serializeDataAttributes(data?: Record<string, any>) {
  return data
    ? Object.entries(data)
        .map(([key, value]) =>
          typeof value === "object" ? `data-${key}=${JSON.stringify(value)}` : `data-${key}="${value}"`,
        )
        .join("")
    : ""
}
