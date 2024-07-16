

export function addToFavouritee(characterId){
    let characterLis = getAllFavouriteeChar();
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

export function getAllFavouriteeChar(){
    let char = localStorage.getItem("favChar");
    if(!char){
        return false;
    }
    else{
        return char.split(",");
    }
}

export function removeFavChar(characterId){
    let characterLis = getAllFavouriteeChar();
    characterId = (typeof characterId == "number")?JSON.stringify(characterId) : characterId;
    if(characterLis){
        if(isFavChar(characterId)){
            characterLis.splice(characterLis.indexOf(characterId),1);
            localStorage.setItem("favChar",characterLis);
        }
    }

}

export function isFavChar(characterId){
    let characterLis = getAllFavouriteeChar();
    characterId = (typeof characterId == "number")?JSON.stringify(characterId) : characterId;
    if(characterLis){
        return characterLis.includes(characterId);
    }
    return false;
}