/* Bubble Sort using Javascript. */

/* Bubble Sort Function */
function bubbleSort(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - i - 1; j++) {
      /* Check if Element at Current Index is Larger then the Next Index */
      if (a[j] > a[j + 1]) {
        /* If TRUE then swap the Elements */
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  /*Now a is Sorted*/
  /* Print a */
  console.log(a);
}

/* Unsorted Array */
var a = [8, 5, 3 , 1, 4, 7 , 9];

/* Use Bubble Sort on the Array */
bubbleSort(a);

/* By - Harsh Tanwar */
