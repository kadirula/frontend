let userInput = document.querySelector('.barcode-card__input');
let generateBtn = document.querySelector('.barcode-card__btn');
let barcodeBody = document.querySelector('.barcode-card__body');
let container = document.querySelector('.container');

let generateBarcode = () => {
  container.classList.add('active');
  setTimeout(() => {
    JsBarcode('#barcode', userInput.value, {
      background: 'white',
      lineColor: 'black'
    });
  }, 200);
}

generateBtn.addEventListener('click', () => {
  if(userInput.value != ''){
    barcodeBody.style.display = 'flex';
    generateBarcode();
  }
  else{
    barcodeBody.style.display = 'none'
  }
})