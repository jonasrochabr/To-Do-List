//função add tarefa
function addTask() {
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        //clona
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //add titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //evento remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this)
        });

        // ev. completar
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        };)


        //limpar
        document.querySelector("#task-title").value ="";

    }


}

//func remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//func completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done")
}


//evento adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault

    addTask();
   
});