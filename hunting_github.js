function clickToShowName() {

    $.get("https://api.github.com/users/iamthevinn", displayName);

    function displayName(data) {
        document.getElementById("nameText").innerHTML = data["name"];
    }
}