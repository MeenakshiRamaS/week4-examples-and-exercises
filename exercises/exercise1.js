/* 
TODO: Write a function called getTriangleArea 
that returns the area of a triangle. It
should take in three parameters.

Requisite math (use * for multiplication):
   s = (sumOfSides) / 2;
   area = √(s(s-a)(s-b)(s-c))
*/

function getTriangleArea (a, b, c) {
   const s = (a + b + c)/2;
   return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}


// Run the file and use this to check your work
console.log("getTriangleArea(3,4,5)", getTriangleArea(3,4,5)," (should be 6)")
console.log("getTriangleArea(2,6,7)", getTriangleArea(2,6,7)," (should be ≈5.562)")
console.log("getTriangleArea(9,9,9)", getTriangleArea(9,9,9)," (should be ≈35.074)")
let x;
let y = null;
console.log("x: ", x, "y: ", y);
