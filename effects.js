var a, b, c, img;
// getting elements by id and assiging them to variables FOR BUTTONS
a = document.getElementById("less");
b = document.getElementById("more");
c = document.getElementById("rotate");
//getting element (img) by tag name
img = document.getElementById("nalesnik");
//default rotation
let rotation = 0;

//adding listener
a.addEventListener("click", function () {
  let length = img.offsetWidth;
  if (length>150)
  {
    var end = length - 10 + "px";
    img.style.width = end;
  }else img.style.width = end;
});

b.addEventListener("click", function () {
  let length = img.offsetWidth;
  if (length<525)
  {
    var end = length + 10 + "px";
    img.style.width = end;
  }else img.style.width = end;
});
c.addEventListener("click", function () {
  rotation = rotation + 90;
var string = "rotate(" + rotation + "deg)";
  img.style.transform = string;
});
