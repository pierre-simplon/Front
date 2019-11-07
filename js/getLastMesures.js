const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', `https://distorted-louse-3971.dataplicity.io/last-measure`, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const jsonResult = JSON.parse(this.response)
        addLastMesure("last",jsonResult)
    } else {
        console.log('Erreur ...')
    }
}

// Send request
request.send();

function addLastMesure (id,mesure) {
    // create a new paragraph per type of measure
    var newPTemperature = document.createElement("p");
    var newPPressure=document.createElement("p");
    var newPHumidity=document.createElement("p");
    // define a text content
    var newTemperatureContent = document.createTextNode("Temperature: "+mesure.temperature+"°C");
    var newPressureContent=document.createTextNode("Pression: "+mesure.pressure+" Hpa");
    var newHumidityContent=document.createTextNode("Humidité: "+mesure.humidity+" %hum");
    // add content to the paragraph
    newPTemperature.appendChild(newTemperatureContent);
    newPPressure.appendChild(newHumidityContent);
    newPHumidity.appendChild(newPressureContent);
    
    // add the paragraphs to the DOM
    document.getElementById(id).appendChild(newPTemperature);
    document.getElementById(id).appendChild(newPPressure);
    document.getElementById(id).appendChild(newPHumidity);
  }