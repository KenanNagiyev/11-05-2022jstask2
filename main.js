var selectedRow = null;
function OnFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["Name"]=document.getElementById("Name").value;
    formData["Surname"]=document.getElementById("Surname").value;
    formData["Age"]=document.getElementById("Age").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.Name;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.Surname;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.Age;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML= `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value=selectedRow.cells[0].innerHTML;
    document.getElementById('Surname').value=selectedRow.cells[1].innerHTML;
    document.getElementById('Age').value=selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Surname;
    selectedRow.cells[2].innerHTML = formData.Age;
}

function onDelete(td){
    if(confirm('Do you want to delete this.record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowindex);
    }
    resetForm();
}

function reserForm(){
    document.getElementById('Name').value = '';
    document.getElementById('Surname').value = '';
    document.getElementById('Age').value = '';
}