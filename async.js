// setInterval
// clearInterval

// setTimeout
// clearTimeout

var posX = 0;
var degrees = 0;
var maxExecutions = 20 * 3
var ballDOMElement = document.querySelector("#ball")
var intervalID

function manageBallAnimation () {
    ballDOMElement.style.left = `${posX++}px`;

    if (degrees > 360)  degrees = 0
    ballDOMElement.style.transform = `rotate(${(degrees+=.5)}deg)`

    //enable this if you want to have intervalFn being interrupted internally
    // if (++executions === maxExecutions) {
    //     clearInterval(intervalID);
    // } 
}

document.querySelector("#stop").onclick = function () {
    clearInterval(intervalID);
}
document.querySelector("#play").onclick = function () {
    intervalID = setInterval(manageBallAnimation, 20) //ms!
}

