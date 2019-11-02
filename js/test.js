$(document).ready(function(){
    $("#infoDialog").hide();
});

function opendialog(){
    $("#infoDialog").fadeIn();
}
function closedialog(){
    $("#infoDialog").fadeOut();
}
function closeDialogAfterTask(){
    $("#infoDialog").fadeOut();
}
$(document).ready(function(){
    $("#tasks").hide();
});

function opentasks(){
    $("#tasks").fadeIn();
}

function checkParams() {
    let title = $('#title').val();
    let description = $('#description').val();
     
    if(title.length != 0 && description.length != 0) {
        $('#dialogSave').removeAttr('disabled');
    } else {
        $('#dialogSave').attr('disabled', 'disabled');
    }
}

$(function(){
    $('#dialogForm input[type="submit"]').click(function(e){
        e.preventDefault();

        let fields = $('#dialogForm').serializeArray();
        console.log(fields);
        createNewTaskElement(fields);
    });

});

var createNewTaskElement=function(taskString){

	let taskTitle=document.createElement("p");
    taskTitle.className = "taskTitle";

    let descriptionTask=document.createElement("p");
    descriptionTask.className = "descriptionTask";

    let priority=document.createElement("p");
    priority.className = "levelTask";
    
    let selectAction=document.createElement("div");
    selectAction.className = "selectAction";

    let select=document.createElement("select");
    let array = ["...", "done", "edit", "delete"];
    select.setAttribute("id", "action");
    selectAction.appendChild(select);

    for(let i = 0; i < array.length; i++){
        let option = document.createElement("option");
        option.setAttribute("value", array[i]);
        option.text = array[i];
        select.appendChild(option);
    }
    $.each(taskString,function(i,field){
        if(field.name == "title"){
            taskTitle.innerText = field.value;
        }
        if(field.name == "description"){
            descriptionTask.innerText = field.value;
        }
        if(field.name == "priority"){
            priority.innerText = field.value;
        }
    });
    let tasks = document.getElementById("tasks");
    tasks.appendChild(taskTitle);
    tasks.appendChild(descriptionTask);
    tasks.appendChild(priority);
    tasks.appendChild(selectAction);
    

}