/* selection Sort using Javascript. */

/* selection Sort Function */
function selectionSort(a) {
  var minIdx,
    temp,
    len = a.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (a[j] < a[minIdx]) {
        minIdx = j;
      }
    }
    temp = a[i];
    a[i] = a[minIdx];
    a[minIdx] = temp;
    /*Now a is Sorted*/
    /* Print a */
    console.log(a);
  }
}

/* Unsorted Array */
var a = [8, 5, 3, 1, 4, 7, 9];

/* Use selection Sort on the Array */
selectionSort(a);

/* By - Harsh Tanwar */
