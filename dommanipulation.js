"use strict";

const contentChange = document.getElementById("firstHeading");

firstHeading.textContent = "This Section demonstrates content inserted from JavaScript";

const styledContent = document.querySelector(".second-heading");
styledContent.style.backgroundColor = "#299";

const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  alert("You clicked the button!");
});

const link = document.querySelector("a");

link.addEventListener("click", function(event){
    event.preventDefault();
    link.innerHTML = `The link was clicked, but failed to navigate to section`
})
