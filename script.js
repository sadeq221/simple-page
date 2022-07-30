// Declarations

let sandwitch = $("#menuLines");
let smMenu = $("#smMenu");

// Styling

smMenu.css("display", "none");

// show Sandwitch Menu

sandwitch.click(function() {
    if (sandwitch.css("rotate") == "none" || sandwitch.css("rotate") == "0deg") {
        sandwitch.animate({ "rotate": "-90deg" }, 500)
    } else {
        sandwitch.animate({ "rotate": "0deg" }, 500)
    }
    smMenu.slideToggle(500);
})