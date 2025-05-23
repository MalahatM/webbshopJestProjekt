

test('ska returnera false om id inte är ett nummer', () => {
  // Arrange
  const item = { id: 'abc', name: 'Apple', price: 10 };
  const expected =false;

  // Act
  const actual = isCartItem(item);

  // Assert
  expect(actual).toBe(expected);
});