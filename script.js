

/* 
(copybtn) = botao copiar
(criptbtn) = botao criptografar
(uncriptbtn) = botao descriptografar

Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   

*/

/* 

Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

let text = document.querySelector("#input-txt");
let criptbtn = document.querySelector("#btn-cript");
let uncriptbtn = document.querySelector("#btn-descript");
let copybtn = document.querySelector("#btn-copy");
let output = document.querySelector("#output-texto");
var finaltxt = "";
var cript;
var uncript;

const regex = new RegExp("^[a-z \b]+$");

function criptTxt(){
	
var txtbox = text.value;
cript = txtbox.replace(/e/g, "enter")
.replace(/i/g, "imes")
.replace(/a/g, "ai")
.replace(/o/g, "ober")
.replace(/u/g, "ufat");
finaltxt = cript;

output.value = cript;
}

function uncripTxt(){
	var txtbox = text.value;
	uncript = txtbox.replace(/enter/g,"e")
.replace(/imes/g,"i")
.replace(/ai/g,"a")
.replace(/ober/g,"o")
.replace(/ufat/g,"u");
finaltxt = uncript;
console.log(finaltxt);
output.value = finaltxt;
}

function copyTxt(){
	navigator.clipboard.writeText(output.value);
}

function letrasindisp(input_test){
	if(!regex.test(input_test)){
		return alert("Não é permitido o uso de caracteres especiais!");

	}else{
		return input_test;
	}
}

criptbtn.addEventListener("click",function(event){
	event.preventDefault();
	criptTxt();
})
	


uncriptbtn.addEventListener("click",function(event){
	event.preventDefault();
	uncripTxt();
})
	


copybtn.addEventListener("click",function(){
	copyTxt();
})

