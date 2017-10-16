var square = x => x*x;

console.log(square(10));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log('Hi. Im', this.name);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log('Hi. Im ', this.name);

  }
};

user.sayHiAlt(1, 2, 3);
