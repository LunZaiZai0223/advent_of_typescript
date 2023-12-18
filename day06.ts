// https://typehero.dev/challenge/day-6
type FilterChildrenBy<Union, ExcludedKey> = Exclude<Union, ExcludedKey>;
