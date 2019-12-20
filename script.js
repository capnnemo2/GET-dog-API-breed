'use strict';

$(function() {
    console.log('App loaded. Waiting for submit.');
    watchForm();
});

function watchForm() {
    $('#dogBreed').submit(event => {
        event.preventDefault();
        let userBreedInput = $('#dogBreed').val();
        getDogImages(userBreedInput);
    });
}

function getDogImages(userBreed) {
        fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("We either don't have that breed in our database or you made that one up. Please try again."));
    
}

function displayResults(responseJson) {
    console.log(responseJson.message);
        $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden');
}