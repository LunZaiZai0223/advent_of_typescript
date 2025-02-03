// https://www.adventofts.com/events/2024/10

enum Gift {
  Coal = 0,
  Train = 1,
  Bicycle = Train << 1,
  SuccessorToTheNintendoSwitch = Bicycle << 1,
  TikTokPremium = SuccessorToTheNintendoSwitch << 1,
  Vape = TikTokPremium << 1,

  Traditional = Train | Bicycle,
  OnTheMove = Coal | Bicycle | TikTokPremium | Vape,
  OnTheCouch = ((Coal | TikTokPremium | Vape) & ~Bicycle) | SuccessorToTheNintendoSwitch,
}
