
// A function to create a button for each event and check whether that event is saved or not
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
            const isSaved = parent.classList.contains("save-event");
            if(!isSaved){
                saveEvent(parent, button, summarySection)
            }else{
                removeEvent(parent, button, summarySection);
            }
        }
    }
}

// A function that returns event details to later be displayed in the summary section
function getEventDetails(card){
    const getDetails = card.querySelectorAll("ul li");
    
    return{
        name: getDetails[0].textContent, 
        dateTime: getDetails[1].textContent, 
        location: getDetails[2].textContent
    } ;
}

// A function to create a new list of events once "save-event-button" is clicked
 function saveEvent(card, button, summarySection){
            card.classList.add("save-event");
            button.textContent = "Remove Event";
            button.classList.add("remove-btn");

            card.style.border = "5px dashed blue";
            
            const details = getEventDetails(card);
            const list = summarySection.querySelector(".saved-events-list");
            list.style.border = "5px dashed blue";
            
            const listItem = document.createElement("li");
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

// A function to dynamically remove the events once they are saved 
function removeEvent(card, button, summarySection){
    card.classList.remove("save-event");
    button.classList.remove("remove-btn");
    button.textContent = "Save Event";
    card.style.border = "";
    const list = summarySection.querySelector(".saved-events-list");
    list.style.border = "";

    if(card.savedListItem){
        card.savedListItem.remove();
        card.savedListItem = null;
    }

    updateEmptyMsg(summarySection);
    
}

// A function to update the empty message before any events are saved and when we remove all events that were saved
function updateEmptyMsg(summarySection){
    const list = summarySection.querySelector(".saved-events-list");
    const emptyMsg = summarySection.querySelector(".empty-event-msg");
    if(list.children.length == 0){
        emptyMsg.style.display = "block";
    }else{
        emptyMsg.style.display = "none";
        }
}

// A function that creates the saved event summary section 
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

    return section;

   
}

// A function to capture the series of events happening once the page is loaded
function newSection(){
    const summarySection = createSummarySection();
    createButton(summarySection);
    updateEmptyMsg(summarySection);
}


window.addEventListener('load', newSection);



