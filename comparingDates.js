/* Comparing two dates in Javascript */

/* Function to compare dates */
function dateCompare(d1, d2) {
  const date1 = new Date(d1); /* date 1 */
  const date2 = new Date(d2); /* date 2 */

  /* If - Else conditions used */
  if (date1 > date2) {
    console.log(`${d1} is greater than ${d2}`);
  } else if (date1 < date2) {
    console.log(`${d2} is greater than ${d1}`);
  } else {
    console.log(`Both dates are equal`);
  }
}
/* Print the obtained Data */
console.log(1);
dateCompare("9/2/2000", "9/2/2021");
console.log(2);
dateCompare("10/5/2021", "10/6/2021");
console.log(3);
dateCompare("01/01/2022", "01/01/2022");
