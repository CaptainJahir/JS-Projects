let task = [
    {
        task : 'DO Dishes'
    },
    {
        task : 'DO Coding'
    },
    {
        task : 'Testing it'
    },
    {
        task : 'Adding One More'
    }
];   // Here Goes The Task Array

    /* Generating Html Through JS */


let html = '';

task.forEach((taskItem)=>{
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