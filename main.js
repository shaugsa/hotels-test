
// Запрос к xml файлу
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    Hotels(this);
    }
};
xhttp.open("GET", "Hotels.xml", true);
xhttp.send();

let column1 = document.getElementById("nameHotel")
let column2 = document.getElementById("priceHotel")
let column3 = document.getElementById("addressHotel")

function Hotels(xml) {
    let xmlDoc = xml.responseXML.childNodes[0];

    for (let i = 0; i < 9; i++) {
        let nameArr = xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue.split(" ");
        let addressArr = xmlDoc.getElementsByTagName("AddressLine")[i].childNodes[0].nodeValue;
        let price = xmlDoc.getElementsByTagName("Hotel")[i].getAttribute('Price');

        let a = 0;

        function Name(nameArr) {
            for (let i = 0; i < nameArr.length; i++) {
                if (nameArr[i] == 'Hilton') {
                    a += true;
                } else {
                    false
                }
            }
        }

        Name(nameArr);

        function Address(addressArr) {
            for (let i = 0; i < addressArr.length; i++) {
                addressArr[i] = addressArr[i].toLowerCase();
            }
            for (let i = 0; i < addressArr.length; i++) {
                if (addressArr[i] == ' new york' || addressArr[i] == ' ny') {
                    a += true
                } else {
                     false
                }
            }
        }

        Address(addressArr);

        if (a > 2 ) {
            let name = document.createElement('li')
            name.innerHTML = xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue;
            console.log(name)
            column1.appendChild(name)
            let priceElem = document.createElement('li')
            priceElem.innerHTML = price;
            column2.appendChild(priceElem)
            let address = document.createElement('li')
            address.innerHTML = xmlDoc.getElementsByTagName("AddressLine")[i].childNodes[0].nodeValue;
            column3.appendChild(address)
        } else {
            null
        }
    }
}