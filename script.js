
function createButton(){

    const parentList = document.querySelectorAll(".grid-item");
    for(let index = 0; index < parentList.length; index++){
        const parent = parentList[index];
        const button = document.createElement("button");
        button.textContent = "Save Event";
        button.classList.add("save-event-btn");
        parent.appendChild(button);

        button.addEventListener('click', saveEvent)

        function saveEvent(){
            parent.style.border = "5px dashed blue"; 
            button.textContent = "Remove Event";
            
            const details = getEventDetails();
            const list = document.querySelector(".saved-events-list");
            
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
            
        }      
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



function getEventDetails(){
    const getDetails = document.querySelectorAll(".grid-item.ul li");
    return{
        name: getDetails[0].textContent, 
        dateTime: getDetails[1].textContent, 
        location: getDetails[2].textContent
    } ;
}




window.addEventListener('load', createButton);
window.addEventListener('load', createSummarySection);



