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

function renderChecked(e){
e.target.parentNode.classList.toggle("nostrike")
}

input.addEventListener("click", function (e) {
    e.divContainer.style.textDecoration = "none";
});



//Code for PART 2 
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

// const todoListContainer = document.getElementById('divContainer') 
// const todoForm = document["todo-form"]


// function getTodos(){
//     axios.get("https://api.vschool.io/daniel/todo").then(response => {
//         const todos = response.data
//         listToDOM(todos)
//     }).catch(error => console.log(error))
// }


// function listToDOM(todosArr){
//     for(let i = 0; i < todosArr.length; i++){
// ///////// First, Create needed Elements
//         const todoContainer = document.createElement('div')
//         const todoTitle = document.createElement('h1');
//         const checkbox = document.createElement('input')
//         const delBtn = document.createElement('button')


// ///////// Second, Edit the element (text, styles/classes, event listeners)
//         todoContainer.classList.add("todo-container")
//         todoContainer["data-todoID"] = todosArr[i]._id
//         todoTitle.textContent = todosArr[i].title
//         checkbox.type = "checkbox"
//         checkbox.checked = todosArr[i].completed
//         delBtn.textContent = "Delete"
       

//         // Checkbox PUT request for updating UI and DB
//         checkbox.addEventListener("change", function(e){
//             const ID = e.target.parentNode["data-todoID"]
//             const updates = {
//                 completed: e.target.checked
//             }
//             // put request to mark it true/false completed
//             axios.put(`https://api.vschool.io/daniel/todo/${ID}`, updates).then(response => {
//                 todoListContainer.innerHTML = ""
//                 getTodos()
//             })
//         })

//         // Delete Button DELETE request
//         delBtn.addEventListener("click", function(e){
//             const ID = e.target.parentNode["data-todoID"]
//             axios.delete(`https://api.vschool.io/daniel/todo/${ID}`).then(response => {
//                 e.target.parentNode.remove()
//             })
//         })

//         // Line through on the title
//         if(checkbox.checked){
//             todoTitle.style.textDecoration = "line-through"
//         }

// ///////// Third, put the elements on the DOM
//         todoContainer.appendChild(todoTitle)
//         todoContainer.appendChild(checkbox)
//         todoContainer.appendChild(delBtn)
//         todoListContainer.appendChild(todoContainer)
//     }
// }


// // ADD TODO FORM (POST)
// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()
  
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value
//     }

//     todoForm.title.value = ""
//     todoForm.description.value = ""

//     axios.post("https://api.vschool.io/daniel/todo", newTodo).then(response => {
//         todoListContainer.innerHTML = ""
//         getTodos()
//     })
// })


// getTodos()














































//