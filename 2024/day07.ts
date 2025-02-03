// https://www.adventofts.com/events/2024/7

const createRoute = <const Route extends string[]>(author: string, route: Route) => ({
  author,
  route,
  createdAt: Date.now(),
});
