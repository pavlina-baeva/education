let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let in3 = document.getElementById("in3");
let date = new Date();
const avatars = [
    "images/av1.jpg",
    "images/av2.jpg",
    "images/av3.jpg",
    "images/av4.jpg",
    "images/av5.jpg",
    "images/av6.jpg",
    "images/av7.jpg",
    "images/av8.jpg"
];

function checkComment() {
    if (document.getElementById("refuse").checked || in2.value == "") {
        document.querySelector(".checked__avatar").src = avatars[Math.floor(Math.random() * avatars.length)];
    } else {
        document.querySelector(".checked__avatar").src = `${in2.value}`;
    }

    if (document.getElementById("refuse").checked || in1.value == "") {
        document.querySelector(".checked__name").innerText = "Username";
    } else if (document.getElementById("permission").checked) {
        document.querySelector(".checked__name").innerText = `${in1.value[0].toUpperCase() + in1.value.slice(1).toLowerCase()}`;
    }
    document.querySelector(".checked__comment").innerText = `${in3.value.replace(/viagra/i, "***").replace(/xxx/i, "***")}`;
    document.querySelector(".checked__date").innerText = `${date.toLocaleString()}`;

    in1.value = "";
    in2.value = "";
    in3.value = "";
}