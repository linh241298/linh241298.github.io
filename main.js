let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox_img.png') {
      myImage.setAttribute('src','images/firefox_img1.jpg');
    } else {
      myImage.setAttribute('src','images/firefox_img.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName){
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
