import { expect, test } from 'vitest';
import { sumMultiNumber } from '.';

// test('test name', test function)

test('testSumOfMultiNumber', () => {
  expect(sumMultiNumber(1,2,4)).toEqual(7)
})