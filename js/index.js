// For Sign up and Login button Actions

var a = document.getElementsByClassName("signup")[0];
var b = a.addEventListener("click", function(){
    this.classList.add("SHADOW");
    setTimeout(function(){
        a.classList.remove("SHADOW");
    }, 100);
});

var c = document.getElementsByClassName("login")[0];
var d = c.addEventListener("click", function(){
    this.classList.add("SHADOW");
    setTimeout(function(){
        c.classList.remove("SHADOW");
    }, 100);
});
