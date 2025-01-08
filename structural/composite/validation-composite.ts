import { ValidationComponent } from "./validation-component";

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for(const child of this.children) {
      const valid = child.validate(value);
      if (!valid) return false;
    }

    return true
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach(validation => this.children.push(validation))
  }
}