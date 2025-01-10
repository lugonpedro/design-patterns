import { MainDishBuilder } from "../../creational/builder";

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDesert()
    console.log("Main Dish Builder ", this.mainDishBuilder.getMeal())
    console.log("Main Dish Builder Price ", this.mainDishBuilder.getPrice())
  }
}