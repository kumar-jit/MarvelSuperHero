import { getCharacters } from "./dataFetch.js";
import { renderCharacters,hideLoading,showLoading } from "./commonFun.js";

async function onPageLoad(){
    charactersDivBulder(`limit=24&offset=${getRandomNumber()}&`);
    setPageActive();
}

onPageLoad();


/* -------------------------------------------------------------------------- */
/*                             ALL render Function                            */
/* -------------------------------------------------------------------------- */


async function charactersDivBulder(searchParameter){
    let oCharacters = await getCharacters(searchParameter);
    const characters = document.getElementById('characters');
    characters.innerHTML = "";
    oCharacters.forEach(character => {
        characters.appendChild(renderCharacters(character.id,character.name, character.thumbnail.path + '.' + character.thumbnail.extension));
    });

    const charactersContainer = document.getElementById("charactersContainer");
    hideLoading(charactersContainer);
}

function setPageActive(){
    document.getElementById("home").style.color = "white";
    document.getElementById("fav").style.color = "rgb(167, 165, 165)";
}


//event button
document.getElementById("searchButton").addEventListener("click", (event) => {
    const searchInput = document.getElementById("searchInput");
    // gethr search query
    let searchQuery =  searchInput.value.trim().toLowerCase();
    // preparethe search query
    let searchParameter = (searchQuery.length > 0)? `nameStartsWith=${searchQuery}&limit=50&` : "limit=20&";

    // turn on the loading screen
    showLoading(document.getElementById("charactersContainer"));
    // rerander the page
    charactersDivBulder(searchParameter);
})

// get random value
function getRandomNumber() {
    return Math.floor(Math.random() * 1201);
}