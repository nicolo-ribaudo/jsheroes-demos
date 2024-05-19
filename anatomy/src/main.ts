interface PetConfig {
  name: string;
  title: string;
}

class Pet {
  #name: string;
  #title: string;

  constructor({ name, title }: PetConfig) {
    this.#name = name;
    this.#title = title;
  }

  get #fullName(): string {
    return `${this.#title} ${this.#name}`;
  }

  sayHi() {
    console.log(`Hello, I'm ${this.#fullName}`);
  }
}

const timmy = new Pet({ name: "Timmy", title: "Dr" });
timmy.sayHi();
