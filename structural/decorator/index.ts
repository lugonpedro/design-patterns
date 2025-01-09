import { ProductDecorator } from "./product-decorator";
import { ProductStampDecorator } from "./product-stamp-decorator";
import { TShirt } from "./t-shirt";

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
const stampDecorator = new ProductStampDecorator(tShirt)
console.log(tShirt.getName(), tShirt.getPrice())
console.log(decoratedTShirt.getName(), decoratedTShirt.getPrice())
console.log(stampDecorator.getName(), stampDecorator.getPrice())