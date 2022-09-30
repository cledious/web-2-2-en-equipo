var m = prompt("quieres algo dulce o salado?");
if (m == "salado"){
   s = prompt("quieres 1:pan de pizza o 2:pan con jamon y queso?")
    if (s == "1"){
        alert("ya te traemos tu pizza")
    }
    else if (s == "2"){
        alert("ya te traemos tu pan con jamon")
    }
}
else if (m == "dulce"){
    d = prompt("quieres 1:flauta de guayaba, 2:cacho de dulce de leche o 3:pañuelo de crema pastelera?")
    if (d == "1"){
        alert("ya te traemos tu flauta de guayaba")
    }
    else if (d == "2"){
        alert("ya te traemos tu cacho de dulce de leche")
    }
    else if (d == "3"){
        alert("ya te traemos tu pañuelo de crema pastelera")
    }
}
