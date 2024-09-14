let addBtn = document.querySelector(".add-task"); // Add Button
let inpTag = document.querySelector(".task"); // Input Tag

/* Adding Add Button Function  */

function addBtn(){
    if (inpTag.value) {
        inpTag.value
    } else {
        
    }
}

addBtn.addEventListener("click" , (event) => {
    alert('button clicked');
    event.stopPropagation();
})