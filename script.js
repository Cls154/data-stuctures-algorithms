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

function efficientbubble(array) {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (let i=0; i<array.length; i++) {
      if (array[i+1] < array[i]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      }
    }
  }

  console.log(array);
}

function bubble(array) {
  for (let j=0; j<array.length; j++) {
    for (let i=0; i<array.length; i++) {
      if (array[i+1] < array[i]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      }
    }
  }
  console.log(array);
}
