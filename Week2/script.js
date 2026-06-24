function addtask(){
    var inputtask=document.getElementById("inputtask");
    var task=inputtask.value;
    var message=document.getElementById("message");

    if(task.trim()==""){
        message.innerHTML="Task cannot be empty";
        message.style.color="red";
        return;
    }

    var tasklist=document.getElementById("tasklist");

    tasklist.innerHTML=tasklist.innerHTML+
    "<li>"+
    task+
    "<button onclick='edittask(this)'>Edit</button>"+
    "<button onclick='deletetask(this)'>Delete</button>"+
    "</li>";

    message.innerHTML="Task Added";
    message.style.color="green";
    inputtask.value="";
}

function deletetask(button){
    button.parentElement.remove();
    var message = document.getElementById("message");
    message.innerHTML="Task Deleted";
    message.style.color="red";
}

function edittask(button){
    var oldtask=
    button.parentElement.firstChild.textContent;

    var newtask=
    prompt("Enter New Task", oldtask);

    if(newtask==null){
        return;
    }

    if(newtask.trim()==""){
        return;
    }

    button.parentElement.firstChild.textContent=
    newtask+" ";
    var message = document.getElementById("message");
    message.innerHTML="Task Updated";
    message.style.color="green";
}
