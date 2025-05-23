 function isCartItem(input) {
  return (
    typeof input === 'object' &&
    input !== null &&
    'id' in input &&
    'name' in input &&
    'price' in input &&
    typeof input.id === 'number' &&
    typeof input.name === 'string' &&
    typeof input.price === 'number'
  );
}
export{isCartItem}