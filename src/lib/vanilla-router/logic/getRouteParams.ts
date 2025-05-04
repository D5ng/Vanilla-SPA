export function getRouteParams(urlPath: string, routePath: string) {
  const params: Record<string, any> = {}
  const routePathSegments = routePath.split("/")
  const urlPathSegments = urlPath.split("/")

  const isEqualLength = routePathSegments.length === urlPathSegments.length

  if (!isEqualLength) {
    return null
  }

  for (let i = 0; i < routePathSegments.length; i++) {
    if (routePathSegments[i].startsWith(":")) {
      const paramName = routePathSegments[i].slice(1)
      params[paramName] = urlPathSegments[i]
    }
  }

  return Object.values(params).length !== 0 ? params : null
}
