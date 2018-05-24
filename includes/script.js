var topWrapper = document.getElementById("topWrapper");
var bottomWrapper = document.getElementById("bottomWrapper");
var plus = document.getElementById("plus");
window.onload=function(){
    for(i=0;i<4;i++){
        var cube = document.createElement("section");
        cube.style.opacity=Math.random();
        topWrapper.appendChild(cube);
    }
}

plus.onclick=function(){
    var cube = document.createElement("section");
    cube.style.opacity=Math.random();
    bottomWrapper.appendChild(cube);
}

