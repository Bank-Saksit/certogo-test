import { findConsecutiveNumber } from "./src/find-consecutive-number";

const input = process.argv[2] ? Number(process.argv[2]) : 4;
console.log(findConsecutiveNumber(input));
