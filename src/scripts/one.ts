let seed: number[] = [];
let arrayLength: number = 10;

function zeroOrOne(): number {
  return Math.floor(Math.random() * 2);
}

function reset(): void {
  seed = Array.from({ length: arrayLength }, zeroOrOne);
}

reset();
console.log(seed);
