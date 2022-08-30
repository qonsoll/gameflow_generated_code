const getActiveRouteState = (route) => {
  if (
    !route.routes ||
    route.routes.length === 0 ||
    route.index >= route.routes.length
  ) {
    return route
  }

  const childActiveRoute = route.routes[route.index]
  return getActiveRouteState(childActiveRoute)
}

const getIsBottomTabsVisible = (routeState) => {
  const activeRoute = getActiveRouteState(routeState)
  const activeRouteState = activeRoute.state
  const activeChildren =
    activeRouteState && getActiveRouteState(activeRouteState)
  const activeChildrenState = activeChildren?.state
  const isBottomTabs = !activeRouteState?.index && !activeChildrenState?.index

  return isBottomTabs
}

export default getIsBottomTabsVisible
