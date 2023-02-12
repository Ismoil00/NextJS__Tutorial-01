import { ObjectDec, ArrayDec, Num } from "types/types";

// Object:
function sum({ n1, n2 }: ObjectDec) {
  return n1 + n2;
}

sum({n1: 5, n2: 10});

// Array:
const newArr: ArrayDec = ["somon", 105];

// Function:
function multiplication(n1: Num, n2: Num, n3 = 10): Num {
  return n1 * n2 - n3;
}

multiplication(10, 20, 20);