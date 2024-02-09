function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remover tarefa";
      removeButton.classList.add("remove-btn");
      removeButton.onclick = function() {
        li.remove();
      };
      
      li.appendChild(removeButton);
      taskList.appendChild(li);
      
      taskInput.value = "";
    } else {
      alert("Por favor, insira uma tarefa válida!");
    }
  }