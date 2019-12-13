window.onload = function() {
        document.getElementById("hello-sample").onclick = sayHelloStaff;
        document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
        document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
        document.getElementById("triangle-sample").onclick = drawTriangleStaff;
        document.getElementById("smile-sample").onclick = drawFaceStaff;
        document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

// this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
//
// document.getElementById("some-id")   <-- you need to give each button a unique ID
//                                          and access it in this manner
//
// onclick is an event that is fired when you click something (in our case, a button).
// when we give onclick a value, we're telling JavaScript what to do when we click the button.
// you should set onclick equal to your function names (i.e., sayHello).
//
// there are six event listeners being added for the staff solutions. you'll have an
// equivalent set of six event listeners for your solutions. the first one is done for you.

        document.getElementById("hello").onclick = sayHello;
        document.getElementById("rectangle").onclick = drawRectangle;
        document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
        // document.getElementById("triangle").onclick = drawTriangle;
        // document.getElementById("smile").onclick = drawFace;
        // document.getElementById("pyramid").onclick = drawPyramid;

};

/*
 * Exercise 1.
 */

const sayHello = function() {
        const ctx = document.getElementById('student-canvas-1').getContext('2d');

        const MAX_LENGTH = 50;
        let message;

        do {
                message = window.prompt("Enter your message.");

        } while (message !== null && message.length > MAX_LENGTH);

        if (message == null) {
                ctx.clearRect(0, 0, 1024, 128);

        } else {
                ctx.clearRect(0, 0, 1024, 128);
                ctx.font = '48px sans-serif';
                ctx.strokeText(message, 30, 70);

        };

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
        const ctx = document.getElementById('student-canvas-2').getContext('2d');

        const MIN_LENGTH = 1;
        const MAX_HEIGHT = 512;
        const MAX_WIDTH = 1024;
        let x;
        let y;
        let width;
        let height;

        do {
                x = window.prompt("Enter the x-coordinate.");

        } while (x !== null &&
        (x < MIN_LENGTH || x > MAX_WIDTH - 1));
        do {
                y = window.prompt("Enter the y-coordinate.");

        } while (y !== null &&
        (y < MIN_LENGTH || y > MAX_HEIGHT - 1));
        do {
                width = window.prompt("Enter the width.");

        } while (width !== null &&
        (width < MIN_LENGTH || width > MAX_WIDTH - x));
        do {
                height = window.prompt("Enter the height.");

        } while (height !== null &&
        (height < MIN_LENGTH || height > MAX_HEIGHT - y));

        if (x == null) {
                ctx.clearRect(0, 0, 1024, 512);

        } else if (y == null) {
                ctx.clearRect(0, 0, 1024, 512);

        } else if (width == null) {
                ctx.clearRect(0, 0, 1024, 512);

        } else if (height == null) {
                ctx.clearRect(0, 0, 1024, 512);

        } else {
                ctx.clearRect(0, 0, 1024, 512);
                ctx.strokeRect(x, y, width, height);

        };

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
        const ctx = document.getElementById('student-canvas-3').getContext('2d');

        let color;
        let colorInLower;
        let acceptedColor;

        do {
                color = window.prompt("Enter a color.");
                if (color !== null) {
                        colorInLower = color.toLowerCase();

                };

                switch (colorInLower) {
                        case "black":
                                acceptedColor = true;
                                break;

                        case "blue":
                                acceptedColor = true;
                                break;

                        case "green":
                                acceptedColor = true;
                                break;

                        case "orange":
                                acceptedColor = true;
                                break;

                        case "purple":
                                acceptedColor = true;
                                break;

                        case "red":
                                acceptedColor = true;
                                break;

                        case "yellow":
                                acceptedColor = true;
                                break;

                        default:
                                acceptedColor = false;
                                break;

                };

        } while (color !== null && acceptedColor == false);


        if (color == null) {
                ctx.clearRect(0, 0, 1024, 128);

        } else {
                ctx.clearRect(0, 0, 1024, 128);
                ctx.fillStyle = colorInLower;
                ctx.fillRect(10, 10, 100, 50);

        };

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
};
