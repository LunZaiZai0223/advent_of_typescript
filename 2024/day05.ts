// https://www.adventofts.com/events/2024/5

const createRoute = <T,>(author: string, route: T): T => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
