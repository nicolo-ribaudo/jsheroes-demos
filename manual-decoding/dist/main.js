function class_AmazingPet({
  name,
  title
}) {
  this.name = name;
  this.title = title;
}
class_AmazingPet.prototype.sayHi = function sayHi() {
  console.log(`Hello, I'm ${this.title} ${this.name}`);
};
const timmy = new class_AmazingPet({
  name: "Timmy",
  title: "Dr"
});
timmy.sayHi();
//# sourceMappingURL=main.js.map