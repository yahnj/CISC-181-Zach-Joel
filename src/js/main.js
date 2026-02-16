console.log("Website loaded!");
const button = document.getElementById("learn-more");


button.addEventListener("click", () => {
    window.open("src/pages/about.html", "_self");
});