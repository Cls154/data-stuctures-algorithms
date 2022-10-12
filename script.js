const unsortedArray = [9, 1, 8, 2, 7, 3, 6, 4, 5];

// Always O(n^2)
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

// Best case O(n) otherwise O(n^2)
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

// Always O(n^2)
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

// Best case O(n) otherwise O(n^2)
function insertion(array) {

  for (let i=1; i<array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j+1] = temp;
  }

  console.log(array);
}

// O(n)
function linearSearch(array, value) {
  for (let i=0; i<array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
}

// O(logN)
function binarySearch(sortedArray, value) {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let middle = Math.floor((high + low) / 2);
    let middleValue = sortedArray[middle];

    if (middleValue < value) low = middle + 1;
    else if (middleValue > value) high = middle - 1;
    else return middle;
  }

  return -1;
}

function recursionBinarySearch(sortedArray, value, upper, lower) {
  let middle = Math.floor((upper + lower) / 2);
  let middleValue = sortedArray[middle];

  if (middleValue === value) {
    return middle;
  } 
  else if (middleValue > value) {
    return recursionBinarySearch(sortedArray, value, middle - 1, lower);
  }
  else if (middleValue < value) {
    return recursionBinarySearch(sortedArray, value, upper, middle + 1);
  }
  else {
    return -1;
  }
}

function mergeSort(array) {
  if (array.length <= 1) return;

  const leftArray = [];
  const rightArray = [];
  const middle = Math.floor(array.length / 2);

  for (let i=0; i<array.length; i++) {
    if (i < middle) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(leftArray, rightArray, array);
}
function merge(leftArray, rightArray, array) {
  let lIndex = 0;
  let rIndex = 0;
  let i = 0;

  while (lIndex < leftArray.length && rIndex < rightArray.length) {
    if (leftArray[lIndex] < rightArray[rIndex]) {
      array[i] = leftArray[lIndex];
      i++;
      lIndex++;
    } else {
      array[i] = rightArray[rIndex];
      i++;
      rIndex++;
    }
  }

  for (; lIndex < leftArray.length; lIndex++) {
    array[i] = leftArray[lIndex];
    i++;
  }
  for (; rIndex < rightArray.length; rIndex++) {
    array[i] = rightArray[rIndex];
    i++;
  }
}

