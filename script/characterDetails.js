import { getCharacterDetails } from "./dataFetch.js";
import { hideLoading } from "./commonFun.js";

// task on page loading
async function onPageLoad(){
    let charId =  document.location.search.substring(1);
    if(charId.length == 0){
        window.open("index.html?","_self");
        return;
    }
    let s = await getCharacterDetails(charId);
    renderCharacterInfo(s[0]);
    setPageActive();
}
onPageLoad();

// rander the character details
function renderCharacterInfo(oCharacter){
    const charNameE = document.getElementById("charName");
    charNameE.innerText = oCharacter.name;

    const charDesE = document.getElementById("charDes");
    charDesE.innerText = oCharacter.description;

    const charImgE = document.getElementById("charImg");
    charImgE.src = oCharacter.thumbnail.path + '/portrait_uncanny.' + oCharacter.thumbnail.extension;

    const allDetailsE = document.getElementById("all-details");

    const storiesE = createCareerCard("Stories",oCharacter["stories"]);
    const comicsE = createCareerCard("Comics",oCharacter["comics"]);
    const seriesE = createCareerCard("Series",oCharacter["series"]);
    const eventsE = createCareerCard("Events",oCharacter["events"]);
    allDetailsE.appendChild(storiesE);
    allDetailsE.appendChild(comicsE);
    allDetailsE.appendChild(seriesE);
    allDetailsE.appendChild(eventsE);

    const characterDetailContainer = document.getElementById("characterDetailContainer");
    hideLoading(characterDetailContainer,"flex");
}

function createCareerCard(name, oCareer) {
    // Create the main container div
    const careerContainer = document.createElement('div');
    careerContainer.className = 'career-container';

    // Create the content head div
    const contentHead = document.createElement('div');
    contentHead.className = 'content-head';

    // Create the h3 element
    const h3Element = document.createElement('h3');
    h3Element.textContent = name;

    // Append the h3 element to the content head
    contentHead.appendChild(h3Element);

    // Create the list container div
    const listContainer = document.createElement('div');
    listContainer.className = 'list-container';

    if(oCareer.items && oCareer.items.length == 0){
        const spanElement = document.createElement('h5');
        spanElement.className = 'no-itemFound';
        spanElement.textContent = "No items found !..";

        // Append the span element to the list container
        listContainer.appendChild(spanElement);

    }
    else{
        // Iterate over the movie names and create span elements for each
        oCareer.items.forEach(item => {
            const spanElement = document.createElement('span');
            spanElement.className = 'token';
            spanElement.textContent = item.name;

            // Append the span element to the list container
            listContainer.appendChild(spanElement);
        });
    }

    

    // Append the content head and list container to the main container
    careerContainer.appendChild(contentHead);
    careerContainer.appendChild(listContainer);

    // Return the complete career card element
    return careerContainer;
}


// make active to current page
function setPageActive(){
    document.getElementById("home").style.color = "white";
    document.getElementById("fav").style.color = "rgb(167, 165, 165)";
}

