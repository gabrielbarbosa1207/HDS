document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var btns = document.querySelectorAll(".button");
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.display = "block";
        }
    }, 474000);  // 465000 milliseconds or 7 minutes 45 seconds
});