var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("1").innerHTML = x;
    }
};

// function frtoc() {
//     var x = Interger.parse(temp);
//     klji
//     return;
// }

xhttp.open("Get", "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22#", true);
xhttp.send();