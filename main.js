let allButtons = document.querySelectorAll(".buttons button");
let results = document.querySelector(".results > span");
let key = document.querySelector(".key");
let value = document.querySelector(".value");


allButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        switch (true) {
            case e.target.classList.contains("check-item"):
                checkItem();
                break;
            case e.target.classList.contains("add-item"):
                addItem();
                break;
            case e.target.classList.contains("delete-item"):
                deleteItem();
                break;
            case e.target.classList.contains("show-item"):
                showItem();
                break;
            case e.target.classList.contains("clear-item"):
                clearItem();
        }
    })
})


function keyMessage() {
    results.innerHTML = "Key Input Can't Be Empty";
}
function valueMessage() {
    results.innerHTML = "Value Input Can't Be Empty";
}

function checkMessage() {
    if (key.value !== "") {
        valueMessage();
    } else {
        keyMessage();
    }
}



function checkItem() {

    if (key.value !== "") {

        if (localStorage.getItem(key.value)) {
            results.innerHTML = `Found Local Storage Key Item Called <span>${key.value}</span> And It's Value is <span>${localStorage.getItem(key.value)}</span>`;
        } else {
            results.innerHTML = `No Local Storage Key Item Called <span>${key.value}</span>`;

        }

    } else {
        keyMessage();
    }
}



function addItem() {

    if (key.value !== "" && value.value !== "") {
        localStorage.setItem(key.value, value.value);

        results.innerHTML = `Local storage Item Key <span>${key.value}</span> Added And It's Value is <span>${value.value}</span> `
        key.value = "";
        value.value = "";

    } else {
        checkMessage();
    }
}



function deleteItem() {

    if (key.value !== "") {

        if (localStorage.getItem(key.value)) {

            localStorage.removeItem(key.value);
            results.innerHTML = `The Key Item <span>${key.value}</span> Removed From Local Storage`;
            key.value = "";
            value.value = "";

        } else {
            results.innerHTML = `This Key Item <span>${key.value}</span> Dosen't Exist To Remove It`;
        }

    } else {
        keyMessage();
    }

}



function showItem() {

    if (localStorage.length) {
        results.innerHTML = `Found Items <span>${localStorage.length}</span> <hr>`;
        for (let [key, value] of Object.entries(localStorage)) { // Object.entries(localStorage) => [["name", "mohamed"], ["age", "22"], ["hoopy", "porgramming"]]
            results.innerHTML += `Key = <span>${key}</span> : Value = <span>${value}</span><br>`
        }
    } else {
        results.innerHTML = "Local Storage Is Empty";
    }

}

function clearItem() {
    if (localStorage.length) {

        let length = localStorage.length;
        localStorage.clear();
        results.innerHTML = `Cleared <span>${length}</span> Item`;
    } else {
        results.innerHTML = `There Is No Items To Clear, Local Storge Length is <span>${length}</span>`;

    }
}