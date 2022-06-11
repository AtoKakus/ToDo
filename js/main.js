const btnAdd = document.querySelector(".add-task")
const btnSave = document.querySelector(".save")
const btnCancel = document.querySelector(".cancel")
const btnOk = document.querySelector(".ok")
const btnEdit = document.querySelector(".edit")
const btnClose = document.querySelector(".close")

const inputTask = document.querySelector(".task")
const inputEditTask = document.querySelector(".edit-task")

const editBody = document.querySelector(".edit-body")
const tasksBox = document.querySelector(".tasks-box")
const error = document.querySelector(".error")
const errorEdit = document.querySelector('.error-edit')

let newTask
let id
let y


const checkTask = () => {
	if (inputTask.value !== "") {
		error.style.opacity = "0"
		addTask()
		inputTask.value = ""
	} else {
		error.style.opacity = "1"
	}
}

const addTask = () => {
	newTask = document.createElement("div")
	newTask.classList.add("task")
	newTask.innerHTML = `
    <p class="content-task">${inputTask.value}</p>
							<div class="box-buttons">
								<button class="ok btntask"><i class="fa-solid fa-check"></i></button>
								<button class="edit btntask"><p class="edit">EDIT</p></button>
								<button class="close btntask"><i class="fa-solid fa-x"></i></button>
							</div>`
	tasksBox.append(newTask)
}

const checkClick = (e) => {
	if (e.target.matches(".fa-check")) {
		const l = e.target.closest(".task")
		const w = l.children[0]
		w.classList.toggle("completed")
	} else if (e.target.matches(".edit")) {
        const x=e.target.closest(".task")
        y = x.children[0]
		showEditBody()
		
	} else if (e.target.matches(".fa-x")) {
		e.target.closest(".task").remove()
		closeEditBody()
	}
}
const checkEditInput = ()=>{
 if(inputEditTask.value!==''){
    editTask()
 }
 else{
errorEdit.style.opacity='1'
    
 }

}
const editTask = (e) => {
    y.textContent=inputEditTask.value
    inputEditTask.value=''
   closeEditBody()
   errorEdit.style.opacity='0'
}

const showEditBody = () => {
	editBody.style.display = "flex"
}
const closeEditBody = () => {
	editBody.style.display = "none"
}

tasksBox.addEventListener("click", checkClick)
btnAdd.addEventListener("click", checkTask)
btnCancel.addEventListener("click", closeEditBody)
btnSave.addEventListener("click", checkEditInput)
