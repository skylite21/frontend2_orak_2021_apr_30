

const myObject = {};

console.log(typeof(myObject));

// const player = ['John', 100, true];

const myPlayer = {
  // 'key': 'value',
  'name': 'John',
  // a key oldalon az aposztrof elhagyható
  health: 100,
  alive: true,
  shoot: function() {
    console.log(myPlayer.name, 'lő');
    const bullet = {
      power: 110000
    };
    return bullet;
  }
}; 


console.log(myPlayer.shoot().power);


console.log('a játékos neve:', myPlayer.name);

// a myPlayer object name property-ének új értéket adunk:
myPlayer.name = 'Peter';

myPlayer.levelUp = function() {
  myPlayer.health = myPlayer.health + 50;
};

// metódus: egy objektumon belüli függvényt hívunk metódusnak
myPlayer.levelUp();
console.log('A játékos élete:',myPlayer.health);

console.log(typeof(console));

console.myProperty = 1223;

console.log(console.myProperty);


// const myElement = document.querySelector('#myId');
// myElement.addEventListener('click', () => {});
//
// document.querySelector('#myId').addEventListener('click', () => {});

const newObject = {
  myMethod: function() {
    // a this kulcsszó mindíg az adott object kontextusát jelenti...
    console.log(this);
    console.log(this.myProp);
  },
  myProp: 3
};

newObject.myMethod();

// object-en végigmegyünk for ciklussal: key-value páronként...
for(let key in myPlayer) {
  // key:
  console.log(key);
  // value:
  console.log(myPlayer[key]);
}

const myArray = [2,3,4];
// a tömb is object!!
console.log(typeof(myArray));

// myArray.myProp = 23;
myArray.push(12);

console.log(myArray);

