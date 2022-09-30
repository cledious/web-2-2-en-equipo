

var num1 = parseInt(prompt("digite el primer numero"));
var num2 = parseInt(prompt("digite el segundo numero"));
let op = prompt("elija su operacion,+,-,*,/");

if (op == "+"){
    r = num1 + num2
    alert(r)
}
else if (op == "-"){
    r = num1 - num2
    alert(r)
};
else if (op == "*"){
    r = num1 * num2
    alert(r)
}
else if (op == "/"){
    r = num1 / num2
    alert(r)
}
else {
    alert("vuelva a elegir")
};