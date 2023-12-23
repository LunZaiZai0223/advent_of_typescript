// https://typehero.dev/challenge/day-10

type StreetSuffixTester<T1 extends string, T2 extends string> = T1 extends `${infer _}${T2}` ? true : false;
