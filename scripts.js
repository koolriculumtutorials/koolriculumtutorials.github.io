 window.onscroll = function() {myFunction()};
    function myFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("top").className = "top-toggle fixed-right top-active";
    } else {
        document.getElementById("top").className = "top-toggle fixed-right";
    }
}