const $buttons = $("button.arrow-button");
const $image = $("img.scrolling-img");
let selectedIndex = 0;
const localStorageKey = "currentImage";

const imageList = [
    {
        alt: "jimmy dean",
        url: "https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
        alt: "macbook",
        url: "https://images.unsplash.com/photo-1610414329790-e7fa1582a74e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        alt: "fast bikes",
        url: "https://images.unsplash.com/photo-1610492136007-ccd0f9f4ee8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
    },
    {
        alt: "flamingos",
        url: "https://images.unsplash.com/photo-1610724414154-38bfdf8f2bc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    }
];

$buttons.on("click", function (event) {
    console.log(event);
    const active = $(this);
    const direction = active.attr("data-direction");

    switch (direction) {
        case "left":
            // decrement, go back one image -1
            selectedIndex = determineIndex(selectedIndex - 1);
            displayImage(selectedIndex);
            break;
        case "right":
            // increment and go forward one image +1
            selectedIndex = determineIndex(selectedIndex + 1);
            displayImage(selectedIndex);
            break;
        default:
            return;
    }

});

const determineIndex = function (val) {
    if (val < 0) {
        val = imageList.length - 1;
    } else {
        val = 0;
    }
    return val;
};

const displayImage = function (index) {
    const selected = imageList[index];
    $image.attr("src", selected.url).attr("alt", selected.alt);
    localStorage.setItem(localStorageKey, JSON.stringify(selected));
};

// const rememberedImage = JSON.parse(localStorage.getItem(localStorageKey));
// console.log(imageList.indexOf(rememberedImage));
// if (rememberedImage) displayImage(imageList.indexOf(rememberedImage));
// else displayImage(selectedIndex);
displayImage(selectedIndex);

setTimeout(function () {
    $("div").prepend($("<p>").text("A new paragraph"))
}, 5000);

