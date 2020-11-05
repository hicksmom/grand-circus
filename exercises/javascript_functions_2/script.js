(function() {
    // Code goes in here
    
    let facingForward = true;
    let position = 0;
    
    function moveForward(distance) {
        // increase position by distance
        if (facingForward){
            position += distance;
        } else {
            position -= distance;
        }
    }
    function moveBackward(distance) {
        // decrease position by distance
        if (facingForward){
            position -= distance;
        } else {
            position += distance;
        }
    }
    function turnAround(distance) {
        // switch value of facingForward
        facingForward = !facingForward;
        position = position + distance;
    }
    function printLocation() {
        console.log(position);
    }

    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround(false);
    moveForward(10);
    moveBackward(5);
    printLocation();

})()

