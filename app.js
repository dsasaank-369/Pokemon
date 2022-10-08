
//  var icon = document.getElementById("icon");
//  var nav = document.querySelectorAll("a.nav-link");
//  var logo = document.querySelector(".navbar-brand");
//  var btn = document.querySelector(".iconbtn");

//  icon.onclick = function(){
//    document.body.classList.toggle("dark-theme");
//    if(document.body.classList.contains("dark-theme")){
//      nav.forEach(element => {
//        element.classList.add("white");
//        element.classList.remove("black");
//      });
//      logo.classList.add("white");
//      logo.classList.remove("black");
//      btn.classList.add("whitebg");
//      btn.classList.remove("blackbg");
//      icon.src = "images/sun.png";
//    }else{
//      nav.forEach(element => {
//        element.classList.add("black");
//        element.classList.remove("white");
//      });
//      logo.classList.add("black");
//      logo.classList.remove("white");
//      btn.classList.add("blackbg");
//      btn.classList.remove("whitebg");
//      icon.src = "images/moon.png";
//    }
//  }


var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}