axios.get("https://api.vschool.io/daniel/todo").then(function(response){
var arr = response.data
for(var i = 0; i < arr.length; i++){
    
    var todoContainer = document.createElement("div")
    var input = document.createElement("input")
    var title = document.createElement("h3")
    input.type = "checkbox"
    
    input.addEventListener("click", function(e) {
            e.target.parentNode.childNodes[1].style.textDecoration = "line-through";
        }, true)
        

        if(arr[i].completed){
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

input.addEventListener("click", function(e){
    e.divContainer.style.textDecoration = "none";
});