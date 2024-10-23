import { isPrime } from "../helpers";

function isFactorValidWithCondition(
  lengthDistrict: number,
  numberBase: number,
  primeNumbers: number[]
): boolean {
  const factor: number[] = [];
  const maxNumber = numberBase / Math.pow(2, lengthDistrict - 1);

  for (let i = 0, number = numberBase; i < primeNumbers.length; ) {
    const primeNumber = primeNumbers[i];

    if (primeNumber > maxNumber) break;

    if (number % primeNumber === 0) {
      factor.push(primeNumber);
      number /= primeNumber;
    } else {
      i++;
    }

    if (number === 1) break;
  }

  const distinctFactor = new Set<number>(factor);

  return distinctFactor.size === lengthDistrict;
}

export function findConsecutiveNumber(sequenceLength: number) {
  if (sequenceLength < 2) throw new Error("sequenceLength must be greater than 1");

  const primeNumbers: number[] = [];

  for (let i = 2; ; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
      continue;
    }

    if (primeNumbers.length < sequenceLength) continue;

    const result: number[] = [];
    for (let j = 0; j < sequenceLength; j++) {
      const currentNumber = i + j;

      if (isPrime(currentNumber)) {
        primeNumbers.push(currentNumber);
        i = currentNumber;
        break;
      }

      if (
        !isFactorValidWithCondition(sequenceLength, currentNumber, primeNumbers)
      ) {
        i = currentNumber;
        break;
      }

      result.push(currentNumber);

      if (j === sequenceLength - 1) {
        return result;
      }
    }

    const isOutRange = i > 10000000;
    if (isOutRange) {
      console.log("can't find");
      break;
    }
  }
}
