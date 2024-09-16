let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];   // Here Goes The Task Array


/* Generating Html Through JS */

let html = '';


function updateTask() {
    html =``; // This Removes the previous Tasks which already Exists (fixing duplicates)
    localStorage.clear(); // clearing local storage so that , array won't repeat
    
    taskArr.forEach((taskItem)=>{
        
        html += `   <div class="added-task">
        <p class="task">${taskItem.task}</p>
        <button class="done-task" onclick ="compTask()"><img src="Assests/correct.png" alt="task-done"></button>
        </div>  `;
        
        let taskDiv = document.body.querySelector('.all-tasks');
        taskDiv.innerHTML = html;
    });
    
    inpTag.value = '';

    localStorage.setItem('taskArr' ,JSON.stringify(taskArr)); //storing in local storage
}

// Adding Add button Functionality

let addBtn = document.body.querySelector('.add-task'); // Targeting Add Button
let inpTag = document.body.querySelector('.inp-task'); // Targeting Input Tag

// this function is for adding to multiple maddEventlistner 

function EventListenerCode(){
    /* Works When Input Tag Contains Value and Doesn't Work When Input tag Doesn't contain value */
    if (inpTag.value) {
        taskArr.push({'task' : inpTag.value});
        updateTask();
    }
    else{
        alert('Please Enter The task');
    }
}

addBtn.addEventListener('click' , () => {EventListenerCode()}); // This for click on add button

inpTag.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        EventListenerCode();
    }
}); // This Will Trigger on Enter Button in Input Tag 

function compTask(index) {
    /* Removing From DOM */
    let taskDiv = document.body.querySelector(".all-tasks");  // Targeting the task div container
    let task = document.body.querySelector(".added-task");  // Targeting Actual Task
    taskDiv.removeChild(task);
    taskArr.splice(index ,1);   // Removing From JS Array
    localStorage.setItem('taskArr', JSON.stringify(taskArr)); // updates local Storage and removes that particular element
    updateTask(); // Generate HTML Again 
}

updateTask();