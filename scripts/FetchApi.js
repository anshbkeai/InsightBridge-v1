import { showToast } from "./UIManager.js";

export function fetchapidata(card_object) {
    return fetch(card_object.url)
        .then(resp => resp.json())
        .then(data => {
            console.log("Fetched:", data);
            return data;
        })
        .catch(err => {
            //alert("Hey this Api Connection Refused");
            showToast("Error fetching","error");
            return null;
        });
}
