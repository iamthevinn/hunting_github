//console.log("hello world")

$.get("https://api.github.com/users/iamthevinn", displayName);
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    console.log(data["name"])
}

function clickToShowName() {
    document.getElementById("nameText").appendChild(new_fruit);
}