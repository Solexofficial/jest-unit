const square = require('./square');

describe('square', () => {
  let mockValue;
  // Перед каждым
  beforeEach(() => {
    //  Add to BD
  });
  // Один раз перед всеми тестами
  beforeAll(() => {});
  test('Корректное значение', () => {
    // expect(square(3)).toBe(9);
    // expect(square(3)).toBeLessThan(10);
    // expect(square(3)).toBeGreaterThan(3);
    // expect(square(3)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {});
});
