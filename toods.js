var date=new Date();
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var day=days[date.getDay()];
var month=months[date.getMonth()];
var year=date.getFullYear();
var dates=date.getDate();
const final=[day,month,dates,year].join(" ")
document.getElementById("date").innerHTML=final

var text = document.getElementById("text");
var btn = document.getElementById("btn");
var todolist = document.getElementById("todolist");

function add(){
    if(text.value=="")
    return ;

var task=document.createElement("div");
var delbtn=document.createElement("i");
var checker=document.createElement("i");
task.setAttribute("class",task);
delbtn.setAttribute("class","fa-2x fa fa-trash")
checker.setAttribute("class","fa-2x fa-regular fa-square")
var textnew=document.createElement("p")
textnew.setAttribute("class","ptask");
textnew.innerText=text.value;
todolist.style.height="70vh";
todolist.appendChild(task);
task.style.display="flex";
textnew.style.marginLeft="0";
textnew.style.marginRight="auto";
delbtn.style.margin=0;


task.appendChild(checker)
task.appendChild(textnew)
task.appendChild(delbtn)
delbtn.addEventListener("click", e=> {
    task.remove();})
    task.addEventListener("click",e=>{
        if(checker.classList.contains("fa-square")){
            checker.classList.remove("fa-2x","fa-regular","fa-square")
            checker.classList.add("fa-2x","fa-solid" ,"fa-square-check")
          }
          else{
            checker.classList.remove("fa-2x","fa-solid" ,"fa-square-check")
            checker.classList.add("fa-2x","fa-regular","fa-square")
          }
    }

    )
    text.value=""
}



btn.addEventListener("click",e=>{add()});
