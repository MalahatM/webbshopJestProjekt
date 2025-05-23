function isCartItem(input) {
  return (
    typeof input === 'object' &&
    input !== null &&
    'id' in input &&
    'name' in input &&
    typeof input.id === 'number' 
  );
}
export{isCartItem}