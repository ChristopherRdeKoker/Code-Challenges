'use strict';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
    console.log(`Times up~`);
  });
};

////////////////////////////////////////////////////////////////

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
      reject(new Error(`Problem loading image: not found... 🐶`));
    });
  });
};

let currentImg;
///////////////////////////////////////////////
/*
createImage('img/img-1.jpg')
  .then(img => {
    console.log(`Image 1 loaded+`);
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none'; //absolutely perfect code
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
*/
///////////////////////////////////////////////////////////
// coding challenge no.3 (Part1)

// const LoadNPause = async function () {
//   try {
//     //load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log(`Image 1 loaded +`);
//     await wait(2);
//     img.style.display = 'none';
//     //load image 2

//     img = await createImage('img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//     //load image 3
//     img = await createImage('img/img-3.jpg');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(`${err} 👀`);
//   }
// };

// LoadNPause();
////////////////////////////////////////
//Part 2, new async + constructor promise
// const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(img => {
//       createImage(img);
//     });
//     console.log(imgs);
//   } catch {
//     console.error(`${err} 👀`);
//   }
// };
// loadAll(imgArr);
////////////////////////////////
// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
