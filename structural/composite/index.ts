export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach(product => this.children.push(product))
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const shirt = new ProductLeaf('Camiseta', 49.9);
const mug = new ProductLeaf('Caneca', 19.9);
const iphone = new ProductLeaf('Iphone X', 58900);

const productBox = new ProductComposite();
productBox.add(shirt, mug, iphone);
console.log(productBox)
console.log(productBox.getPrice())

const tablet = new ProductLeaf('Tablet', 2600);
const kindle = new ProductLeaf('Kindle', 500);
const anotherProductBox = new ProductComposite()

anotherProductBox.add(tablet, kindle)
anotherProductBox.add(productBox)

console.log(anotherProductBox)
console.log(anotherProductBox.getPrice())