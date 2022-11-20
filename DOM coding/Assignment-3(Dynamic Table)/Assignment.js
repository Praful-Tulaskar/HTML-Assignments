let inputName = document.getElementById('name');
let inputEmail = document.getElementById('mail');
let inputNo = document.getElementById('number');
let addButton = document.getElementById('btn');
let table = document.getElementById('dynamic-table');

function updateTable(){
    var newRow = document.createElement('tr');
    var newName = document.createElement('td');
    var newEmail = document.createElement('td');
    var newNo = document.createElement('td');
    var newbtn = document.createElement('addButton');
    newbtn.innerText = 'Delete';


    newName.innerText = inputName.value;
    newEmail.innerText = inputEmail.value;
    newNo.innerText = inputNo.value;
    

    table.appendChild(newRow).appendChild(newName);
    table.appendChild(newRow).appendChild(newEmail);
    table.appendChild(newRow).appendChild(newNo);
    table.appendChild(newRow).appendChild(newbtn);

}


addButton.addEventListener('click', () =>{
    updateTable();
})

function remove() {
   
    table.removeChild(newRow).removeChild(newName);
    table.removeChild(newRow).removeChild(newEmail);
    table.removeChild(newRow).removeChild(newNo);
    table.removeChild(newRow).removeChild(newbtn);
}

newbtn.addEventListener('click', () =>{
    remove();
})