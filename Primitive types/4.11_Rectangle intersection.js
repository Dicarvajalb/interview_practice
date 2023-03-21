/*

Write a Program which tests if two rectangles have a nonempty intersection. If the intersection is
nonempty, retum the rectangle formed by their intersection.


IN: 8 numbers, first two for upper left corner of rect 1, next two for bottom right corner of rect 1 and so on..


*/

function isIntersected(x11, y11, x12, y12 ,x21, y21, x22, y22){
    //return x11 >= x21 && y11 >= y21 
    //1 dimension:
    return (((x12 - x11) >= (x21 - x11) && x11 <= x21) ||  ((x22 - x21) >= (x11 - x21) && x21 <= x11)) &&
           (((y11 - y12) >= (y22 - y12) && y12 <= y22) ||  ((y21 - y22) >= (y12 - y22) && y22 <= y12))

}

console.log(isIntersected(0,3,2,0, -1,5, 3,4))