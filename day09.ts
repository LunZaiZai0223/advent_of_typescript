// https://typehero.dev/challenge/day-9
type Reverse<S, Acc extends string = ''> = S extends `${infer Char}${infer Rest}`
  ? Reverse<Rest, `${Char}${Acc}`>
  : Acc;
