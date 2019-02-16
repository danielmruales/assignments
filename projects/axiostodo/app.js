axios.get("https://api.vschool.io/daniel/todo").then(function (response) {
    var arr = response.data
    for (var i = 0; i < arr.length; i++) {

        var todoContainer = document.createElement("div")
        var input = document.createElement("input")
        var title = document.createElement("h3")
        input.type = "checkbox"

        input.addEventListener("click", function (e) {
            e.target.parentNode.childNodes[1].toggle("strikened");
        }, true)


        if (arr[i].completed) {
            todoContainer.classList.toggle("strikened");
            input.checked = true;
        }

        title.textContent = arr[i].title

        todoContainer.appendChild(input)
        todoContainer.appendChild(title)
        document.getElementById("divContainer").appendChild(todoContainer)
    }
})

// function renderChecked(e){
// e.target.parentNode.classList.toggle("nostrike")
// }

input.addEventListener("click", function (e) {
    e.divContainer.style.textDecoration = "none";
});



// Code for PART 2 
axios.get("https://api.vschool.io/lara/todo").then(response => {
    response.data.forEach(function (todo) {
        renderTodo(todo)
    })
})

function renderTodo(todo) {

    var parent = document.createElement("div");
    parent.className = "todo";
    var text = document.createTextNode(todo.title);

    parent.appendChild(text);

    var input = document.createElement("input");
    input.className = "input";
    input.type = "checkbox";

    input.addEventListener("click", handleChecked);

    parent.appendChild(input);

    if (todo.completed) {
        parent.classList.toggle("strikened");
        input.checked = true;
    }

    document.getElementById("todo-list").appendChild(parent);

}

function handleChecked(e) {
    console.log("here");
    e.target.parentNode.classList.toggle("strikened");
}

document.form.addEventListener("submit", function (e) {
    e.preventDefault();

    newTodo = {
        title: document.form.title.value,
        description: document.form.description.value,
        imgUrl: document.form.image.value
    }

    axios.post("https://api.vschool.io/lara/todo", newTodo).then(function (response) {
        console.log(response.data);
        renderTodo(response.data);
    })
})




















































//