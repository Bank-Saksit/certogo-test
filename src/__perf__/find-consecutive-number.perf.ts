import { findConsecutiveNumber } from "../find-consecutive-number";

function measureExecutionTime(sequenceLength: number): number {
    const start = process.hrtime();
    findConsecutiveNumber(sequenceLength);
    const end = process.hrtime(start);
    return end[0] * 1000 + end[1] / 1000000; // Convert to milliseconds
}

function runPerformanceTest(sequenceLength: number, iterations: number) {
    let totalTime = 0;
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
        const executionTime = measureExecutionTime(sequenceLength);
        totalTime += executionTime;
        times.push(executionTime);
        console.log(`Run ${i + 1}: ${executionTime.toFixed(2)}ms`);
    }

    const averageTime = totalTime / iterations;
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);

    console.log(`\nPerformance Test Results for sequenceLength = ${sequenceLength}:`);
    console.log(`Average execution time: ${averageTime.toFixed(2)}ms`);
    console.log(`Minimum execution time: ${minTime.toFixed(2)}ms`);
    console.log(`Maximum execution time: ${maxTime.toFixed(2)}ms`);
}

const sequenceLength = process.argv[2] ? Number(process.argv[2]) : 4;
const iterations = process.argv[3] ? Number(process.argv[3]) : 100;
runPerformanceTest(sequenceLength, iterations);
