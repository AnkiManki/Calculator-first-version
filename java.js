var screen = document.getElementById("screen");
var one = document.getElementById("btn1");
var two = document.getElementById("btn2");
var three = document.getElementById("btn3");
var four = document.getElementById("btn4");
var five = document.getElementById("btn5");
var six = document.getElementById("btn6");
var seven = document.getElementById("btn7");
var eigth = document.getElementById("btn8");
var nine = document.getElementById("btn9");
var zero = document.getElementById("btn0");
var clear = document.getElementById("btnClear");

var multply = document.getElementById("btnMultiply");
var div = document.getElementById("btnDivide");
var plus = document.getElementById("btnPlus");
var minus = document.getElementById("btnMinus");
var equal = document.getElementById("btnEqual");

var curent = "";
var secondNumber = 0;


clear.addEventListener("click", function(){
	screen.textContent = "";
	curent = "";
    secondNumber = 0;

});

// dodavame event listener na kopceto 1
one.addEventListener ("click", function(){
	// vrednosta od kopceto 1 go stavame vo displayot na kalkulatorot (ova e samo vizuelno)
	screen.textContent += one.value;
	// so sekoj klik mu stavame vrednost 1 na current varijablata, namerno e string za da se zalepat edna do druga, posto ako e broj ke mi gi sobere
	curent += "1";
	// i koga ke imame zalepen string (primer 1111) go pretvarame vo broj za da mozeme da presmetuvame
	curent = parseInt(curent);
});

two.addEventListener ("click", function(){
    screen.textContent += two.value;
	curent += "2";
	curent = parseInt(curent); 
});

three.addEventListener ("click", function(){
    screen.textContent += three.value;
	curent += "3";
	curent = parseInt(curent); 
});

four.addEventListener ("click", function(){
    screen.textContent += four.value;
	curent += "4";
	curent = parseInt(curent); 
});

five.addEventListener ("click", function(){
    screen.textContent += five.value;
	curent += "5"; 
	curent = parseInt(curent);
});

six.addEventListener ("click", function(){
    screen.textContent += six.value;
	curent += "6";
	curent = parseInt(curent); 
});

seven.addEventListener ("click", function(){
    screen.textContent += seven.value;
	curent += "7";
	curent = parseInt(curent); 
});

eigth.addEventListener ("click", function(){
    screen.textContent += eigth.value;
	curent += "8";
	curent = parseInt(curent); 
});

nine.addEventListener ("click", function(){
    screen.textContent += nine.value;
	curent += "9";
	curent = parseInt(curent); 
});

zero.addEventListener ("click", function(){
    screen.textContent += zero.value;    
	curent += "0";
	curent = parseInt(curent);
});



//ovde vrsime logicki operacii vo ovoj slucaj sobiranje
plus.addEventListener("click", function(){
	// plusot go prikazuvame na displayot od kalkulatorot
    screen.textContent += this.textContent;
	// curent varijablata ja stavame vo secondNumber varijablata da ni se cuva
	secondNumber += curent;
	// go resetirame current na nula, neli veke vrednosta ni e prefrlena vo secondNumber
	// so klikanje na plus, koga ke vpiseme vtor broj ke ni se zapise va curent varijablata
	curent = "";
	// stavame listener na ednakvo
	equal.addEventListener("click", function endakvo(){
	// tuka samo ke ni se presmeta rezultatot
	secondNumber += curent;
	screen.textContent = secondNumber;
	curent = "";
	equal.removeEventListener("click", ednakvo());
	});
});

multply.addEventListener("click", function(){
    screen.textContent += this.textContent;
	secondNumber += curent;
	curent = "";
	equal.addEventListener("click", function ednakvo(){
	secondNumber *= curent;
	screen.textContent = secondNumber;
	curent = "";
	equal.removeEventListener("click", ednakvo);
	});
});

minus.addEventListener("click", function(){
    screen.textContent += this.textContent;
	secondNumber += curent;
	curent = "";
	equal.addEventListener("click", function endakvo(){
	secondNumber -= curent;
	screen.textContent = secondNumber;
	curent = "";
	equal.removeEventListener("click", ednakvo);
	});
});

div.addEventListener("click", function(){
    screen.textContent += this.textContent;
	secondNumber += curent;
	curent = "";
	equal.addEventListener("click", function(event){
	secondNumber /= curent;
	screen.textContent = secondNumber;
	curent = "";
	event.stopPropagation();
	});
});



	

