var permissionElement = document.querySelector('.permission');
var blockBtnElement = document.querySelector('.block');
var allowBtnElement = document.querySelector('.allow');
var permissionAPIElement = document.querySelector('.get-permission');
var fingerPrintElement = document.querySelector('.fingerprint');
var svgElement = document.querySelector('#my-svg');
var closeFingerPrintElement = document.querySelector('.close');

blockBtnElement.addEventListener('click', function () {
  permissionElement.classList.add('hide');
  permissionAPIElement.classList.remove('hide');
  fingerPrintElement.classList.add('hide');
});

closeFingerPrintElement.addEventListener('click', function () {
  permissionElement.classList.add('hide');
  permissionAPIElement.classList.remove('hide');
  fingerPrintElement.classList.add('hide');
});

allowBtnElement.addEventListener('click', function () {
  permissionElement.classList.add('hide');
  svgElement.children[0].setAttribute('stroke', '#fff');
})

permissionAPIElement.addEventListener('click', function () {
  permissionAPIElement.classList.add('hide');
  permissionElement.classList.remove('hide');
  fingerPrintElement.classList.remove('hide');
  animateSvg();
});

svgElement.addEventListener('mouseover', function () {
  animateSvg();
});

function animateSvg() {
  new Vivus('my-svg', {
    duration: 30,
    type: 'async'
  });
}
