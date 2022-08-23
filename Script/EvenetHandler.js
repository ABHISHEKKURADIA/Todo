//Display data in body
function addItem()
{
    //createElements
    var tr=document.createElement("tr");
    var td=document.createElement("td");
    var td2=document.createElement("td");
    var button=document.createElement("button");
    var checkbox=document.createElement("input");

    let item=container.childNodes[0].value;
    
    //Add Text Node
    let t=document.createTextNode(item);
    
    //Set Classes
    td.style.fontFamily="sans-serif";
    td2.setAttribute("class","task");
    td2.setAttribute("class","close");
    checkbox.className="form-check-input";
    //td2.setAttribute("style","width:30px");
    button.setAttribute("class","closeLink");
    tr.className="displayrows";
    checkbox.type="checkbox";

    // Add Event Listner
    button.setAttribute("onClick","return closeTask(this)");
    checkbox.setAttribute("onClick","return completed(this)");

    //Symbol to be displayed
    button.innerText="X";
    
    //Append element
    td2.appendChild(button);
    tr.appendChild(checkbox);
    tr.appendChild(td).appendChild(t);
    tr.appendChild(td2);
    table.appendChild(tr);
    return false;
}

function closeTask(e)
{
    let t=e;
    t.parentElement.parentElement.style.display="none";
    return false;
}

function completed(e)
{
    let element=e;
    if(element.checked)
    {
        e.nextElementSibling.style.textDecoration="line-through";
    }
    else
    {
        e.nextElementSibling.style.textDecoration="none";
    }
    
}