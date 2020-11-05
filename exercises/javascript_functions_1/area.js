// A = l * w
// length = 10
// width = 5

function getAreaOfRectangle(width,length) {
    const area = width * length;
    // console.log(area);
    return area;
}

const area = getAreaOfRectangle(5,10);
console.log(area);

// Area of Circle
function getAreaOfCircle(radius) {
    const areaCircle = (radius * radius * Math.PI);
    return areaCircle;
}

const areaCircle = getAreaOfCircle(10);
console.log(areaCircle);


// Circumference of Circle
function getCircumferenceOfCircle(radius) {
    const circumferenceCircle = (2 * Math.PI * radius);
    return circumferenceCircle;
}

const circumferenceCircle = getCircumferenceOfCircle(10);
console.log(circumferenceCircle);


// Area of Square
function getAreaOfSquare(side) {
    const areaSquare = (4 * side);
    return areaSquare;
}

const areaSquare = getAreaOfSquare(5);
console.log(areaSquare);


// Area of Triangle
function getAreaofTriangle(base, height) {
    const areaTriangle = ((base * height) / 2);
    return areaTriangle
}

const areaTriangle = getAreaofTriangle(7, 5);
console.log(areaTriangle);

