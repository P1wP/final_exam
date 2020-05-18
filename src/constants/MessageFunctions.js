import { BASE_URL } from "./API";
import { KEY } from "./API";

const URL = BASE_URL + "contacts";

const FETCH_OPTIONS = {
    headers: {
      "Content-Type": "application/json",
      key: KEY,
    },
};


// NEW MESSAGE
export function PostContact(data){

    FETCH_OPTIONS.method = "POST";
    FETCH_OPTIONS.body = JSON.stringify(data);

    fetch(URL, FETCH_OPTIONS)
        .then(response => response.json())
        .then(json => console.log(json));
};

// GET MESSAGES
export function GetContact(test){

    fetch(URL, FETCH_OPTIONS)
        .then(response => response.json())
        .then(json => console.dir(json))      
};