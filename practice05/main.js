function fizzBuzz() {
  const fizz = "Fizz"
  const buzz = "Buzz"
  const fizzbuzz = 'FizzBuzz'
  let index = 1;
  while (index < 101) {
    if (index % 15 === 0) { console.log(fizzbuzz) }
    else if (index % 3 === 0) { console.log(fizz) }
    else if (index % 5 === 0) { console.log(buzz) }
    else {
      console.log(index)
    }
    index++;
  }
}
fizzBuzz();
