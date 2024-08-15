let scroll_button = document.getElementById("back_to_top");
let scroll_distance = 20;
let scroll_button_status = true;

scroll_button.style.animationDuration = "0.5s";
scroll_button.style.animationTimingFunction = "ease-in-out";
scroll_button.style.animationIterationCount = "1";
scroll_button.style.animationDirection = "normal";
scroll_button.style.animationFillMode = "forwards";

window.onscroll = () => {
    if (
        document.body.scrollTop > scroll_distance || 
        document.documentElement.scrollTop > scroll_distance
    ) {
        scroll_button.style.animationName = "slideScrollIn";
    } else {
        scroll_button.style.animationName = "slideScrollOut";
    }
}