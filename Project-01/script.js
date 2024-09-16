let task = [];   // Here Goes The Task Array

    /* Generating Html Through JS */

let html = '';

function updateTask() {
    task.forEach((taskItem)=>{
        task = []; // Emptying The Array So that it won't print multiple times the previous task

        html += `
        
        <div class="added-task">
                    <p class="task">${taskItem.task}</p>
                    <div class="task-action">
                        <button class="done-task"><img src="Assests/correct.png" alt="task-done"></button>
                        <button class="del-task"><img src="Assests/x-mark.png" alt="del-task"></button>
                    </div>
                </div>
        
        `;
        
        let taskDiv = document.body.querySelector('.all-tasks');
        taskDiv.innerHTML = html;
    });

    inpTag.value = '';
}

// Adding Add button Functionality

let addBtn = document.body.querySelector('.add-task'); // Targeting Add Button
let inpTag = document.body.querySelector('.inp-task'); // Targeting Input Tag

// this function is for adding to multiple maddEventlistner 

function EventListenerCode(){
    /* Works When Input Tag Contains Value and Doesn't Work When Input tag Doesn't contain value */
    if (inpTag.value) {
        task.push({'task' : inpTag.value});
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