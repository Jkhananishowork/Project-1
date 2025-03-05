let header = document.querySelector("h1");

header.addEventListener("mouseenter", function() {
    header.innerText = "Ready for Battle?";
});

header.addEventListener("mouseleave", function() {
    header.innerText = "Call of Battle: Beta Access"
});


let submitButton = document.querySelector("button[type='submit']");

submitButton.addEventListener("mouseenter", function() {
    submitButton.innerText = "Deploying...";
});

submitButton.addEventListener("mouseleave", function() {
    submitButton.innerText = "Join the Beta"
});