// https://typehero.dev/challenge/day-4
type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
  /** 遍歷 T 的所有 keys */
  [K in keyof T]: Address;
};
