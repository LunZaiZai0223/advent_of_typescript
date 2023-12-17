// https://typehero.dev/challenge/day-5
type SantasList<ListOne extends readonly unknown[], ListTwo extends readonly unknown[]> = [...ListOne, ...ListTwo];
