interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class Input implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class Paragraph implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof Input) {
      this.element.innerText = observable.element.value;
    }
  }
}

function makeInput() {
  const input = document.createElement("input");
  document.body.appendChild(input);
  return input;
}

function makeParagraph() {
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.innerText = "Hello World!";
  return p;
}

const input = new Input(makeInput());
const p1 = new Paragraph(makeParagraph());
const p2 = new Paragraph(makeParagraph());
input.subscribe(p1, p2);

input.element.addEventListener("keyup", () => {
  input.notify();
});
