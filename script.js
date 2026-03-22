function addProject() {
    let input = document.getElementById("projectInput");
    let div = document.createElement("p");
    div.innerText = input.value;
    document.getElementById("projectList").appendChild(div);
    input.value = "";
}

function addDay() {
    let text = document.getElementById("dayInput").value;
    let image = document.getElementById("imageInput").files[0];

    let div = document.createElement("div");
    div.innerHTML = "<p>" + text + "</p>";

    if (image) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(image);
        img.width = 150;
        div.appendChild(img);
    }

    document.getElementById("dayList").appendChild(div);
}

function sendMessage() {
    alert("Message Sent Successfully!");
    return false;
}
const days = {
    day1: {
        text: "Learned basic HTML structure and tags.",
        img: "C:\Users\shank\OneDrive\Desktop\kanchan portfolio\File folder"
    },
    day2: {
        text: "Worked on CSS styling and layouts.",
        img: "images/day2.jpg"
    },
    day3: {
        text: "Learned JavaScript basics and DOM.",
        img: "images/day3.jpg"
    }
};

function showDay(day) {
    const content = days[day];

    document.getElementById("dayContent").innerHTML = `
        <p>${content.text}</p>
        <img src="${content.img}" width="200">
    `;
}