// canvas in mousemove

/*document.onmousemove = animate;
function animate(event) {
  var colors = [
    "red",
    "blue",
    "yellow",
    "magenta",
    "black",
    "green",
    "#ccc",
    "#fff "
  ];
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);
  circle.style.position = "absolute";
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s ease 0s";

  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.left = circle.offsetHeight - 20 + "px";

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.borderRadius = "30px";
  circle.style.opacity = 0;
}
*/
