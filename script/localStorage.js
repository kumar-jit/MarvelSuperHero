
/**
 * Add Fav char Id to localstorage
 * @param {*} characterId 
 */
export function addToFavouritee(characterId){
    let characterLis = getAllFavChar();
    characterId = (typeof characterId == "number")?JSON.stringify(characterId) : characterId;
    if(characterLis){
        if(!isFavChar(characterId)){
            characterLis.push(characterId)
            localStorage.setItem("favChar",characterLis);
        }
    }
    else{
        localStorage.setItem("favChar",characterId);
    }
}

/**
 * Get All fav char Id from local sotrage
 * @returns 
 */
export function getAllFavChar(){
    let char = localStorage.getItem("favChar");
    if(!char){
        return false;
    }
    else{
        return char.split(",");
    }
}

/**
 * Remove a Fav char from Local sotrage
 * @param {*} characterId 
 */
export function removeFavChar(characterId){
    let characterLis = getAllFavChar();
    characterId = (typeof characterId == "number")?JSON.stringify(characterId) : characterId;
    if(characterLis){
        if(isFavChar(characterId)){
            characterLis.splice(characterLis.indexOf(characterId),1);
            localStorage.setItem("favChar",characterLis);
        }
    }

}

/**
 * Verify a char is fav or not
 * @param {*} characterId 
 * @returns 
 */
export function isFavChar(characterId){
    let characterLis = getAllFavChar();
    characterId = (typeof characterId == "number")?JSON.stringify(characterId) : characterId;
    if(characterLis){
        return characterLis.includes(characterId);
    }
    return false;
}


