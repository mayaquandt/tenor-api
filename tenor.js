// THE BASICS
let baseURL = "https://api.tenor.com/v1/search?tag=";
let apikey = "3ZPZNF583ESM";
let lmt = 8;
let safeSearch = "strict";
let mediaFilter = "gif, tinygif, mp4";


// SEARCH
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const results = document.querySelector(".results");


// RESULTS
searchForm.addEventListener("submit", fetchResults);


// FETCH
function fetchResults(e){
    // console.log(e);
    e.preventDefault();
    let url = "https://api.tenor.com/v1/search?tag=" + searchTerm.value + "&key=" + apikey + "&limit=" + lmt;
        console.log(url);
        console.log("URL:", url);

    fetch(url)
    .then ((res) => {
        console.log(res);
        return res.json()
    })
    .then ((json) => {
        console.log(json);
        displayResults(json);
    });
};


// DISPLAY
function displayResults(json) {
    while (results.firstChild) {  
        results.removeChild(results.firstChild);
    }
    console.log("DisplayResults", json);
    console.log(json.results);
    let gif = json.results;
    console.log(gif);
    
    if(gif.length === 0) {
        console.log("No results");
    } else {
        for(let i = 0; i < gif.length; i++) {
            console.log(i);
            let img = document.createElement("img");

            let current = gif[i];
            console.log("Current:", current);

            img.src=current.media[0].gif.url;

            results.appendChild(img);
        }
    }
    if(gif.length === 10) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};