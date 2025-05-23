import { isCartItem } from '../validation.js';

test('ska returnera false om id inte är ett nummer', () => {
  // Arrange
  const item = { id: 'abc', name: 'Apple', price: 10 };
  const expected =false;

  // Act
  const actual = isCartItem(item);

  // Assert
  expect(actual).toBe(expected);
});
test('ska returnera false om price inte är ett nummer', () => {
	//Arrange
  const item = { id: 1, name: 'Apple', price: 'hej' }; // just price is wrong
  const expected = false;
  //Act
  const actual = isCartItem(item);
  //assert
  expect(actual).toBe(expected);
});


