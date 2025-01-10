import { Beans, Desert, Meat, Rice } from "./abstract-meal";
import { MealBox } from "./meal-box";

interface MealBuilderProtocol {
  makeMeal(): this;
  makeDesert(): this;
}

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeDesert(): this {
    const desert = new Desert('Pudim', 30);
    this._meal.add(desert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDesert()
console.log("Main Dish Builder ", mainDishBuilder.getMeal())
console.log("Main Dish Builder Price ", mainDishBuilder.getPrice())

mainDishBuilder.reset()
const meal2price = mainDishBuilder.makeDesert().getPrice()
console.log("Meal 2 Price: ", meal2price)