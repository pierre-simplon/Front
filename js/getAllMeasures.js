const requestAll = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
requestAll.open('GET',`https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-03&endDate=2019-11-07`, true);

requestAll.onload = function () {
    if (requestAll.status >= 200 && requestAll.status < 400) {
        const jsonResultAll = JSON.parse(this.response)
        for (jsonResultAll.id in jsonResultAll)
            console.log(jsonResultAll.id.temperature)

    } else {
        console.log('Erreur ...')
    }
}

// Send request
requestAll.send();

function addMeasures (measure) {
    const newRow = document.createElement('tr');
    for (let measureAttribute in measure) {
            const measureCell = document.createElement('td');
            measureCell.innerText = measure[measureAttribute];
            newRow.appendChild(measureCell)
    }
    document.getElementById("tableMeasure").appendChild(newRow);
}