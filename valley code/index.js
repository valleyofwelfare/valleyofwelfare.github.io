// This is the log console
function ReadMoreFunction() {
    let dotsSpan = document.getElementById("dotsSpan");
    let ReadSpan = document.getElementById("MoreSpan");
    let ReadButton = document.getElementById("ReadButton");

    if(dotsSpan.style.display === "none"){
        dotsSpan.style.display = "inline"
        ReadSpan.style.display = "none"
        ReadButton.innerHTML = "Read More"
    }else {
        dotsSpan.style.display = "none"
        ReadSpan.style.display = "inline"
        ReadButton.innerHTML = "Read Less"
    }

}
function ReadMoreFunction2() {
    let dotsSpan = document.getElementById("dotsSpan2");
    let ReadSpan = document.getElementById("MoreSpan2");
    let ReadButton = document.getElementById("ReadButton2");

    if(dotsSpan.style.display === "none"){
        dotsSpan.style.display = "inline"
        ReadSpan.style.display = "none"
        ReadButton.innerHTML = "Read More"
    }else {
        dotsSpan.style.display = "none"
        ReadSpan.style.display = "inline"
        ReadButton.innerHTML = "Read Less"
    }

}





