// variables
const text = document.getElementById("text");
const btn = document.getElementById("btn");


 var vowals = 0
// event listeners

btn.addEventListener("click", () =>{
	vowelCounter()
	 var vowals = 0
})


// functions

function vowelCounter(){
	textValue = text.value
	
	for (var i = 0; i < textValue.length; i++) {
		if (textValue[i]=== "a" || textValue[i]=== "e" || textValue[i]=== "i" || textValue[i]=== "o" || textValue[i]=== "u") {
			vowals = vowals + 1
			
		}
	}
	alert(`this have ${vowals} vowels`)
			vowals = vowals - vowals
			
}