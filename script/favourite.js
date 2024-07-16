import { getCharactersBatch } from "./dataFetch.js";
import {getAllFavouriteeChar} from "./localStorage.js";
import { renderCharacters,hideLoading } from "./commonFun.js";
let oCharacters = [];
const oJsonData = {
    characters : []
};
async function loadInitalData(){
    // rendaring char details
    renderAllCharacter();
    setPageActive();
}


loadInitalData();

async function renderAllCharacter(){
    const characters = document.getElementById('favCharacters');
    characters.innerHTML = "";
    // getting fav char ID from localstorage
    const favCharList  = getAllFavouriteeChar();
    // getting char details from API
    let response = await getCharactersBatch(favCharList);
    response.forEach((character,index) => {
        characters.appendChild(renderCharacters(character.id,character.name, character.thumbnail.path + '.' + character.thumbnail.extension,"fav"));
    })

    const favCharactersContainer = document.getElementById("favCharactersContainer");
    hideLoading(favCharactersContainer);
}
function setPageActive(){
    document.getElementById("home").style.color = "rgb(167, 165, 165)";
    document.getElementById("fav").style.color = "white";
}