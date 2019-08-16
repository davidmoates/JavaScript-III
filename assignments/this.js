/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding is when this refers to the window/console; the outter most object.
* 2.Implicit Binding is when this refers to the object using the method.
* 3.New Binding is when this refers to the constructor function specific object.
* 4.Explicit Binding is when you tell this what this is pointing to using .call, .apply, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const favSup = {
  myFav: "My Favorite SuperHero is",
  heroName: function(hero) {
    console.log(`${this.myFav} ${hero}!`);
  }
}

favSup.heroName('Green Arrow');
favSup.heroName('Implicit Binding Man');
// code example for Implicit Binding

// Principle 3
function SuperName(yourName) {
  this.super = "Super";
  this.yourName = yourName;
  this.supName = function() {
    console.log(this.super + this.yourName);
  };
}

const david = new SuperName('David is in New Binding!');
const notDavid = new SuperName(' Explicit Binding Man!');
david.supName()
// code example for New Binding

// Principle 4
david.supName.call(notDavid);

// code example for Explicit Binding
