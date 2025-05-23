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
test('ska returnera false om name saknas eller inte är en sträng', () => {
	//Arrange
  const invalidItems = [
    { id: 1, price: 10 },                  // name saknas
    { id: 1, name: 123, price: 10 },       // om name nummer 
    { id: 1, name: null, price: 10 },      // om name tum
  ];
   //Act
    const actual = isCartItem(item);
  //assert
  expect(actual).toBe(expected);
});


