// https://typehero.dev/challenge/day-12

type FindSanta<T extends Array<unknown>> = {
  [K in keyof T]: T[K] extends '🎅🏼' ? (K extends `${infer N extends number}` ? N : never) : never;
}[number];
