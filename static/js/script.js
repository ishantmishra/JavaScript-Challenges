// Challenge 1 Age in Days
function  ageInDays() {
    var birthYear = prompt('What Is Your Birth Year');
    var ageInDayss = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You Are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = " https://cdn2.thecatapi.com/images/db2.gif";
    div.appendChild(image);
}