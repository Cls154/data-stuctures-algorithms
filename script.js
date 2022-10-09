const unsortedArray = [9, 5, 2, 7, 4, 1, 3, 6, 8];

function selection(array) {
  for (let i=0; i<array.length; i++) {
    let minIndex = i;
    for (let j=i+1; j<array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }

  console.log(array);
}

// selection(unsortedArray);

function bubble(array) {

  console.log(array);
}

bubble(unsortedArray);