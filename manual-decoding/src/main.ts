interface PetConfig {
  name: string;
  title: string;
}

class AmazingPet {
  declare name: string;
  declare title: string;

  constructor({ name, title }: PetConfig) {
    this.name = name;
    this.title = title;
  }

  sayHi() {
    console.log(`Hello, I'm ${this.title} ${this.name}`);
  }
}

const timmy = new AmazingPet({ name: "Timmy", title: "Dr" });
timmy.sayHi();
