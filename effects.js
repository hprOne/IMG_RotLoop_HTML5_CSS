var a, b, c, img, footer;
// getting elements by id and assiging them to variables FOR BUTTONS
a = document.getElementById("less");
b = document.getElementById("more");
c = document.getElementById("rotate");
//getting element (img) by tag name
img = document.getElementById("pancake");
//default rotation
let rotation = 0;

console.log(footer)
//adding listener
a.addEventListener("click", function () {
  let length = img.offsetWidth;
  if (length<=303)
  {
    document.getElementById("footerhprOne").style.opacity = 100;
    document.getElementById("footerhprOne").style.paddingTop = "1em";
    document.getElementById("footerhprOne").style.height = "3em";
    document.getElementById("footerhprOne").style.fontSize = "0.8em";
  }
  if (length>150 )
  {
    var end = length - 10 + "px";
    img.style.width = end;
  }else img.style.width = end;
});

b.addEventListener("click", function () {
  let length = img.offsetWidth;
  if (length>=303)
  {
    document.getElementById("footerhprOne").style.opacity = 0;
    document.getElementById("footerhprOne").style.paddingTop = "0.01em";
    document.getElementById("footerhprOne").style.height = "0.1em";
    document.getElementById("footerhprOne").style.fontSize = "0.01em";
  }
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
