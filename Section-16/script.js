'use strict';
const countriesContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
    console.log(`Times up~`);
  });
};

////////////////////////////////////////////////////////////////
//code challenge #2: createImg
///////////      Above: great     /////////////////////////////////////
let currentImg;
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      console.error(`Problem loading img 🐶`);
      reject(img);
    });
  });
};

///////////////////////////////////////////////
/*createImage('img/img-1.jpg')
  .then(img => {
    console.log(`Image 1 loaded+`);
    currentImg = img;
    return wait(2);
  })
  .then(() => { 
    currentImg.style.display = 'none';          //absolutely perfect code 
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 2 loaded +`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 3 loaded +`);
    return img;
  })
  .catch(err => console.error(err));
*/ //
///////////////////////////////////////////////////////////
//coding challenge no.4
