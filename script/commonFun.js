
import {addToFavouritee,isFavChar,removeFavChar} from "./localStorage.js";

export function renderCharacters(id,name,imageUrl,renderType){
    // Create the main container div
    const cardBody = document.createElement('div');
    cardBody.className = 'cards-body';
    cardBody.addEventListener("click", (events)=>{
        if(!id)
            return;
        window.open("characterDetails.html?"+id,"_self");
    });


    // Create the image container div
    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-img-container';

    // Create the image element
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.className = 'card-img';
    imgElement.alt = name;

    // Append the image to the image container
    imgContainer.appendChild(imgElement);

    // Create the info container div
    const infoContainer = document.createElement('div');
    infoContainer.className = 'card-info-container';

    // Create the card head div
    const cardHead = document.createElement('div');
    cardHead.className = 'card-head';
    cardHead.textContent = name;

    // Create the action button container div
    const actionBtnContainer = document.createElement('div');
    actionBtnContainer.className = 'card-action-btn';

    // Create the button element
    const button = document.createElement('button');
    button.className = 'love-btn';
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        (isFavChar(id))? removeFavChar(id) : addToFavouritee(id);
        renderFavbuttonIcon(event.target,id);

        if(renderType && renderType== "fav"){
            const parent = document.getElementById('favCharacters');
            parent.removeChild(cardBody);
        }
        
    })
    // generate button inner icon
    renderFavbuttonIcon(button,id);

    // Append the button to the action button container
    actionBtnContainer.appendChild(button);

    // Append the card head and action button container to the info container
    infoContainer.appendChild(cardHead);
    infoContainer.appendChild(actionBtnContainer);

    // Append the image container and info container to the main container
    cardBody.appendChild(imgContainer);
    cardBody.appendChild(infoContainer);

    // Return the complete card element
    return cardBody;
}

export function renderFavbuttonIcon(button,id){
    button.innerHTML = "";
    // Create the span element
    const span = document.createElement('span');
    const favClassName= (isFavChar(id))?'material-icons':"material-symbols-outlined"
    span.className = favClassName;
    span.textContent = "favorite";

    // Append the span to the button
    button.appendChild(span);
}

export function stopAnimation(){
    
    document.getElementById("loader").style.display = "none"
    document.getElementById("mainBody").style.display = "flex";
}

export function hideLoading(elementObject,displayType){
    displayType = (!displayType || displayType.length == 0)?"block":displayType;
    document.getElementById("loader").style.display = "none"
    elementObject.style.display = displayType;
}

export function showLoading(elementObject){
    document.getElementById("loader").style.display = "flex"
    elementObject.style.display = "none";
}

