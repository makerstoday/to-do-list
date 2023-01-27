//seleção de elementos//
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");



//funções//

form.addEventListener("active", (event) => {
    event.preventDefault();

    //verificar se o nome é valido
    if (todoInput.value === ("")){
        alert("Por favor escreva um nome valido!!");
        return;
    }

    });


//eventos//
