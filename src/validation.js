 function isCartItem(input) {
  return (
    typeof input === 'object' &&
    input !== null &&
    'id' in input &&
    'name' in input &&
    'price' in input &&
    typeof input.id === 'number' &&
    typeof input.price === 'number'&&
	typeof input.name === 'string'

  );
}
export{isCartItem}