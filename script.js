
function createButton(summarySection){

    const parentList = document.querySelectorAll(".grid-item");
    for(let index = 0; index < parentList.length; index++){
        const parent = parentList[index];
        const button = document.createElement("button");
        button.textContent = "Save Event";
        button.classList.add("save-event-btn");
        parent.appendChild(button);

        button.addEventListener('click', eventCheck);
        
        function eventCheck(){
            const isSaved = parent.classList.contains("saved-event");
            if(!isSaved){
                saveEvent(parent, button, summarySection)
            }else{
                removeEvent(parent, button, summarySection);
            }
        }
    }
}

 function saveEvent(card, button, summarySection){
            card.classList.add("save-event");
            button.textContent = "Remove Event";

            card.style.border = "5px dashed blue";
            
            const details = getEventDetails(card);
            const list = summarySection.querySelector(".saved-events-list");
            
            const listItem = document.querySelectorAll("li");
            listItem.classList.add("list-item");

            const nameItem = document.createElement("strong");
            nameItem.textContent = details.name;

            const dateTimeItem = document.createElement("p");
            dateTimeItem.textContent = details.dateTime;

            const locationItem = document.createElement("p");
            locationItem.textContent = details.location;

            listItem.appendChild(nameItem);
            listItem.appendChild(dateTimeItem);
            listItem.appendChild(locationItem);
            list.appendChild(listItem);

            card.savedListItem = listItem;
            updateEmptyMsg(summarySection);
            
}      


function removeEvent(card, button, summarySection){
    card.classList.remove("saved-event");
    button.textContent = "Save Event";
    
}

function updateEmptyMsg(summarySection){
    const list = summarySection.querySelector(".saved-events-list");
    const emptyMsg = summarySection.querySelector(".empty-event-msg");
    if(list.children.length == 0){
        emptyMsg.style.display = "block";
    }else{
        emptyMsg.style.display = "none";
        }
}

function createSummarySection(){
    const about  = document.querySelector("#about");
    const section = document.createElement("section");
    section.classList.add("saved-events-section");
    about.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Saved Events";
    section.appendChild(heading);

    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No events have been saved yet";
    emptyMsg.classList.add("empty-event-msg");
    section.appendChild(emptyMsg);

    const list = document.createElement("ul");
    list.classList.add("saved-events-list");
    section.appendChild(list);

   
}



function getEventDetails(card){
    const getDetails = card.querySelectorAll(".grid-item.ul li");
    return{
        name: getDetails[0].textContent, 
        dateTime: getDetails[1].textContent, 
        location: getDetails[2].textContent
    } ;
}

function newSection(){
    const summarySection = createSummarySection();
    createButton(summarySection);
    updateEmptyMsg(summarySection);
}




window.addEventListener('load', newSection);



