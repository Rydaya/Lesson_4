console.log('802.');

let someText = 'Привет 12344ророуак848883838865546638383росататсо49494949499';
let arrayText = someText.split('');
let max = 0;
let maxValue = Number.MIN_VALUE;

function checkNumbers(arrayText) {
  for(let i = 0; i < arrayText.length; i++) {
    arrayText[i] = Number(arrayText[i]);
    if(arrayText[i] >= 0 || arrayText[i] <= 9) {
    	max += 1;
    	if(max > maxValue) {
    		maxValue = max;
    	}
    } else {
    	max = 0;
    }
  }
  return maxValue;
}

console.log(checkNumbers(arrayText));



console.log('803.');

let text = 'Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.';
let array = text.split('');

function checkText(array) {
	for(let i = 0; i < array.length; i++) {
		let currentSymb = array[i].toUpperCase();

		if(currentSymb.charCodeAt(0) < 65 || currentSymb.charCodeAt(0) > 91){
			if (currentSymb.charCodeAt(0) < 1040 || currentSymb.charCodeAt(0) > 1071){
				if(currentSymb.charCodeAt(0) !== 32) {
					let result = 'Текст содержит символы, отличные от букв и пробела';
					return result;
				}
			}
		}
	}
	result = 'Текст не содержит символы, отличные от букв и пробела';
	return result;
}

console.log(checkText(array));
