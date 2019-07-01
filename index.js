let animal = "cat"

function myAnimal() {
  // console.log(animal)
  let animal = "dog";
  return animal
}

function yourAnimal() {
  // console.log(animal)

  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {

  // Feel free to move things around!
  const two = 2
  // console.log(n + two)
  return n + two

}
// myAnimal(animal)
// yourAnimal(animal)
// add2(3)
