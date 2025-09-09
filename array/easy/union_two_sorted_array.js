function findUnion(arr1, arr2) {
  let i = 0, j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) { // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else { // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) { // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i])
      union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) { // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j])
      union.push(arr2[j]);
    j++;
  }

  return union;
}