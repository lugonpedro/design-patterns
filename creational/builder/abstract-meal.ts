export interface MealCompositeProtocol {
  getPrice(): number;
}

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) { }

  getPrice(): number {
    return this.price;
  }
}

export class Rice extends AbstractMeal {
}

export class Beans extends AbstractMeal {
}

export class Meat extends AbstractMeal {
}

export class Desert extends AbstractMeal {
}