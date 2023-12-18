// https://typehero.dev/challenge/day-7
type AppendGood<Input> = { [K in keyof Input as `good_${K & string}`]: Input[K] };
