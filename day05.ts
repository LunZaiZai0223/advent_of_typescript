// https://typehero.dev/challenge/day-5
type SantasList<ListOne extends ReadonlyArray<unknown>, ListTwo extends ReadonlyArray<unknown>> = [
  ...ListOne,
  ...ListTwo
];
