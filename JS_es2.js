var addBtn = function(){
    var btn = document.createElement("button");
    btn.innerHTML = "NON CLICCARE";

    document.getElementById ("body1").append(btn);
    btn.addEventListener("click", changeColor);

}
var changeColor =  function (){
    console.log("BUONGIORNO");
    document.getElementById("div1").setAttribute("style", "background-color: rgb(163, 36, 68)");
    span1.innerHTML = "CUCU";
    document.getElementById ("div1").innerHTML = "<h1> TI AVEVO DETTO DI NON CLICCARE!";
}


document.addEventListener("DOMContentLoaded", addBtn);