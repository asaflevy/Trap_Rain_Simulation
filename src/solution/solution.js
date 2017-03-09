
/**
 * return the number of drops between building
 * @param array
 * @returns {number}
 */
const getRainCapacity = (array) =>{
  let arrayLength = array.length,
  drops_counter = 0,
  heights_left = [],
  heights_right = new Array(arrayLength);

  heights_left[0] = array[0];
  for (let i = 1; i < arrayLength; i++) {
    heights_left[i] = Math.max(heights_left[i-1], array[i]);
  }

  heights_right[arrayLength - 1] = array[arrayLength - 1];
  for (let i = arrayLength - 2; i >= 0; i--) {
    heights_right[i] = Math.max(heights_right[i+1], array[i]);
  }

  for (let i = 1; i < arrayLength; i++) {
    drops_counter += Math.min(heights_left[i], heights_right[i]) - array[i];
  }

  return drops_counter;
};
