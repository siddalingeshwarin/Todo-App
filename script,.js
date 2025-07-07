const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");
 
// this is for adding todo Tasks in the list 
function addTask(){
  if(inputBox.value === '')
    alert("You must write something");
  else{

    //creating list tag 
    let li=document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);


    //ctreating span tag
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
   inputBox.value='';
   saveData();
}

// this code is for making cross and linethrough working purpose 
listContainer.addEventListener("click", function(e)
{

  //tagname must be written in uppercase in js regardless of how u written in html
  if(e.target.tagName==="LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);


//storing the task list in localstorage
function saveData()
{
  //data is a name
localStorage.setItem("data",listContainer.innerHTML);

}

//displaying the stored task after refresh
function showTask()
{
  listContainer.innerHTML=localStorage.getItem("data");
}
showTask();