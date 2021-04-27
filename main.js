var canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth="5";
ctx.arc(220,210,110,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth="5";
ctx.arc(450,210,110,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth="5";
ctx.arc(680,210,110,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth="5";
ctx.arc(340,320,110,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth="5";
ctx.arc(580,320,110,0,2 * Math.PI);
ctx.stroke();


