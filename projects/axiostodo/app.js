axios.get("https://api.vschool.io/emily/todo").then(function(response){
    var arr = response.data
    for(var i = 0; i < arr.length; i++){

        var todoContainer = document.createElement('div')
        var input = document.createElement("input")
        var title = document.createElement("h3")
        input.type = "checkbox"

        input.addEventListener("click", function(e) {
            e.target.parentNode.childNodes[1].style.textDecoration = "line-through";
        }, true)
        

        title.textContent = arr[i].title

        todoContainer.appendChild(input)
        todoContainer.appendChild(title)
        document.getElementById("name").appendChild(todoContainer)
    }   
})