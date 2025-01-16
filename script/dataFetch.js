const publicKey = 'b67d4f43ce28b7f0ca868fd0ceefafb0';
const privateKey = '06c217b1eda9d68f11b9ce315df8b886721ad299';
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
const host = `https://gateway.marvel.com:443/v1/public/`;
const commonParameters = `ts=${ts}&apikey=${publicKey}&hash=${hash}`

// const host = `http://127.0.0.1:3000/`;
// const commonParameters = ``;

export const getCharacters = async (parameter) => {
    try {
        // const response = await fetch(getAbsoluteURL("data.json"));
        const response = await fetch(getAbsoluteURL("characters?" + parameter));
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.error('Error fetching characters:' + JSON.stringify(error));
        return [];
    }
}
export const getCharacterDetails = async (id) => {
    try {

        const response = await fetch(getAbsoluteURL(`characters/${id}?`));
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

export const getCharactersBatch = async (characterIdList) => {
    if(!characterIdList)
        return;

    const characterList = [];
    let allResponse = []
    // Create an array of fetch promises
    const payload = characterIdList.map(id => {
        const url = getAbsoluteURL(`characters/${id}?`);
        return fetch(url).then(response => response.json());
    });
    
    // Wait for all promises to resolve
    try {
        const results = await Promise.all(payload);
        allResponse.push(...results);
    } catch (error) {
        console.error('Failed to fetch character data:', error);
    }

    allResponse.forEach(item => {
        characterList.push(item.data.results[0]);
    })

    return characterList;
}

function getAbsoluteURL(urlPart){
    return host + urlPart + commonParameters;
}