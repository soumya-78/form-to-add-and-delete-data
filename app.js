console.log("welcome");
showNotes();



//to add
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addTxt.value = "";
    showNotes();

});



//to show

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = ``;
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${element.title}</h5>
                <p class="card-text"> ${element.text}</p>
                <button id="${index}"onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElem = document.getElementById("notes");
    // console.log(notesElem);
    if (notesObj.length != 0) {
        // console.log(15);
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = ("Nothing to show! Use Add a Note section above to add notes.");
    }
}




//to delete

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}








let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    // console.log(5);
    let searchVal = search.value.toLowerCase();
    // console.log(searchVal);
    let notecards = document.getElementsByClassName("noteCard");
    Array.from(notecards).forEach(function (e) {
        let cardTxt = e.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        // console.log(5);
        if (cardTxt.includes(searchVal)) {
            e.style.display = "block";
        }
        else {
            e.style.display = "none";
        }

    });

});