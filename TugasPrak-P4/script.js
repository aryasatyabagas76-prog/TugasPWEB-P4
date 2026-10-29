const btn = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function () {
    window.scrollTo({top:0, behavior:"smooth"});
});