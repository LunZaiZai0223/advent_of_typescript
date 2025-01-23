// https://typehero.dev/challenge/day-8
type RemoveNaughtyChildren<T> = {
  [K in keyof T as K extends `naughty_${infer _}` ? never : K]: T[K];
};
