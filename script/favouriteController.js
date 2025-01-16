import { getCharactersBatch } from "./dataFetch.js";
import {getAllFavChar} from "./localStorage.js";
import { renderCharacters,hideLoading } from "./commonFun.js";
let oCharacters = [];
const oJsonData = {
    characters : []
};
async function onPageLoad(){
    // rendaring char details
    setPageActive();
    renderAllCharacter();
    
}

window.addEventListener("load", ()=>{
    onPageLoad();
} );

async function renderAllCharacter(){
    const characters = document.getElementById('favCharacters');
    characters.innerHTML = "";
    // getting fav char ID from localstorage
    const favCharList  = getAllFavChar();
    // getting char details from API
    let response = await getCharactersBatch(favCharList);
    if(response){
        response.forEach((character,index) => {
            characters.appendChild(renderCharacters(character.id,character.name, character.thumbnail.path + '.' + character.thumbnail.extension,"fav"));
            const favCharactersContainer = document.getElementById("favCharactersContainer");
        })
    }
    
    // hideLoading(favCharactersContainer);
}

// make active to current page
function setPageActive(){
    document.getElementById("home").style.color = "rgb(167, 165, 165)";
    document.getElementById("fav").style.color = "white";
}