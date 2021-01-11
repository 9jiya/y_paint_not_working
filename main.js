var mouseEvent = "empty";
var oldx, oldy;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "red";
    widthofline = 1;

    canvas.addEventListener("mousedown", funmousedown);
    function funmousedown(e)
    {
        colour = document.getElementById("colorbox").value;
        width = document.getElementById("linewidth").value;
        radius = document.getElementById("radius_of_circle").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", funmousemove);
    function funmousemove(e)
    {
        currentx = e.clientX - canvas.offsetLeft;
        currenty = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        console.log("Current Position of x and y coordinates = ");
        console.log("x = " + currentx + "y =" + currenty)
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthofline;
        ctx.arc(currentx,currenty,radius,0,2*Math.PI);
        ctx.stroke;
        }

        oldx = currentx; 
        oldy = currenty;
    }
    canvas.addEventListener("mouseup", funmouseup);
    function funmouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", funmouseleave);
    function funmouseleave(e)
    {
        mouseEvent = "mouseleave";
    }