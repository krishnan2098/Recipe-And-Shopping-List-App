// export class Ingredient {
//   public name: string;
//   public amount: number;
//
//   constructor (name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }  Same as that of the following
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
