// https://www.adventofts.com/events/2024/9
// stackoverflow: https://stackoverflow.com/questions/44058101/typescript-declare-third-party-modules

declare module 'santas-special-list' {
  export type Status = 'naughty' | 'nice'
  export type Child = {
    name: string
    status: Status
  }
  export type List = Child[]
}
