
class Animal {
  eat() {
    console.log('eating...');
  }
}

class Dog extends Animal {
  // a constructor egy speciális class metódus: minden példányosításkor lefut
  // automatikusan.
  constructor(name) {
    // a super fgv-t kötelező meghívni ha egy alosztályban construktort használunk...
    super();
    this.breed = 'Kuvasz';
    this.legsCount = 4;
    this.name = name;
  }
  bark() {
    console.log('a kutya ugat!');
  }
}
// példányosítjuk a dog class-t
const myDog = new Dog('Bodri');

console.log(typeof(myDog));
myDog.bark();
myDog.eat();

console.log(myDog.legsCount);
