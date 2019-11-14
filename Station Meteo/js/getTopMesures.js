const request1 = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request1.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/humidity`, true);

request1.onload = function () {
    if (request1.status >= 200 && request1.status < 400) {
        const jsonResult1 = JSON.parse(this.response)
        addTopMesure("top1",jsonResult1)
    } else {
        console.log('Erreur ...')
    }
}

const request2 = new XMLHttpRequest();
// Open a new connection, using the GET request2 on the URL endpoint
request2.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/temperature`, true);

request2.onload = function () {
    if (request2.status >= 200 && request2.status < 400) {
        const jsonResult2 = JSON.parse(this.response)
        addTopMesure("top2",jsonResult2)
    } else {
        console.log('Erreur ...')
    }
}

const request3 = new XMLHttpRequest();
// Open a new connection, using the GET request3 on the URL endpoint
request3.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/pressure`, true);

request3.onload = function () {
    if (request3.status >= 200 && request3.status < 400) {
        const jsonResult3 = JSON.parse(this.response)
        addTopMesure("top3",jsonResult3)
    } else {
        console.log('Erreur ...')
    }
}

// Send request
request1.send();
request2.send();
request3.send();

function addTopMesure (id,mesure) {
    // create a new title per type of measure
    var newH1Temperature = document.createElement("h1");
    var newH1Pressure = document.createElement("h1");
    var newH1Humidity = document.createElement("h1");

    // create a new paragraph per type of measure
    var newPTemperature = document.createElement("p");
    var newPPressure=document.createElement("p");
    var newPHumidity=document.createElement("p");

    // define a title content per type of measure
    var newH1TemperatureContent= document.createTextNode("Top Temperature: "+mesure.measureDate.substr(0,10));
    var newH1PressureContent= document.createTextNode("Top Pressure: "+mesure.measureDate.substr(0,10));
    var newH1HumidityContent=document.createTextNode("Top Humidité:"+mesure.measureDate.substr(0,10));

    // set ids of titles
    newH1Temperature.id="htop1";
    newH1Pressure.id="htop2";
    newH1Humidity.id="htop3";

    // define a paragraph text content per type of measure
    var newTemperatureContent = document.createTextNode("Temperature: "+mesure.temperature+"°C");
    var newPressureContent=document.createTextNode("Pression: "+mesure.pressure+" Hpa");
    var newHumidityContent=document.createTextNode("Humiditée: "+mesure.humidity+" %hum");

    // add content to the titles
    newH1Temperature.appendChild(newH1TemperatureContent);
    newH1Pressure.appendChild(newH1PressureContent);
    newH1Humidity.appendChild(newH1HumidityContent);

    // add content to the paragraph
    newPTemperature.appendChild(newTemperatureContent);
    newPPressure.appendChild(newPressureContent);
    newPHumidity.appendChild(newHumidityContent);
    
    // add titles to the DOM
    if (id=="top2"){
        document.getElementById(id).appendChild(newH1Temperature);
    }   
    if (id=="top3"){
        document.getElementById(id).appendChild(newH1Pressure);
    }
    if (id=="top1"){
        document.getElementById(id).appendChild(newH1Humidity);
    }
    // add the paragraphs to the DOM
    document.getElementById(id).appendChild(newPTemperature);
    document.getElementById(id).appendChild(newPPressure);
    document.getElementById(id).appendChild(newPHumidity);
  }