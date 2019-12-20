'use strict';

$(function() {
    console.log('App loaded. Waiting for submit.');
    watchForm();
});

function watchForm() {
    $('#dog-breed').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

function getDogImage() {
    fetch("https://dog.ceo/api/breed/" + getUserInput() +"/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Either we don't have that breed in our database or you made that one up. Please try again.")); 
}

function getUserInput() {
    let userBreed = $('#dogBreed').val();
    return userBreed;
}

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.status !== "success") {
        alert("Either we don't have that breed in our database or you made that one up. Please try again.");
    } else if (responseJson.status === "success") {
        $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
    }
    $('.results').removeClass('hidden');
}