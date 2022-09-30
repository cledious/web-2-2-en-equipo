var n1,n2,n3,p;
 n1 = parseInt(prompt("primer nota"));
 n2 = parseInt(prompt("segunda nota"));
 n3 = parseInt(prompt("tercer nota"));
p = (n1 + n2 + n3) / 3;
 if (p < 65){
     alert("aplazado")
 }
 else if (p >= 65 && p < 70){
     alert("aprobado, apenas")
 }
 else if (p > 70 && p <= 85){
     alert("aprobado,no esta mal")
 }
 else if (p > 85 && p <= 99){
     alert("aprobado,muy bien")
 }
 else if (p == 100){
     alert("aprobado,excelente")
 };

