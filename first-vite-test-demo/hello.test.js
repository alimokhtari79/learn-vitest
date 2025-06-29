import { describe, expect, test } from 'vitest';
import { subtractOfMultiNumber, sumMultiNumber } from '.';

// test syntax
// test('test name', test function)

describe('summation group', ()=> {
  test('testSumOfMultiNumber', () => {
    expect(sumMultiNumber(1, 2)).toEqual(3);
  });
  
  test('testSumOfMultiNumber', () => {
    expect(sumMultiNumber(1, 2, 3)).toEqual(6);
  });
  
  test('testSumOfMultiNumber', () => {
    expect(sumMultiNumber(1, 2, 3, 4)).toEqual(10);
  });
})



describe('subtract group', () => {
  test('subtractOfMultiNumber', () => {
    expect(subtractOfMultiNumber(1, 1)).toEqual(0);
  });

  test('subtractOfMultiNumber', () => {
    expect(subtractOfMultiNumber(10, 5, 2)).toEqual(3);
  });
});
