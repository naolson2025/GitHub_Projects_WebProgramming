let url = 'http://api.open-notify.org/iss-now.json';

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let time = document.querySelector('#time');

let issMarker;
// Update every 10 sec
let update = 10000;

let map = L.map('iss-map').setView([0, 0], 1);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmFvbHNvbjIwNTAiLCJhIjoiY2pyemdxcHc1MThpZzRhbzhqajJmOHV1YyJ9.EvtKnDOUdT8OMjzz8fxL9A'
}).addTo(map);

let icon = L.icon({
    iconUrl: 'Satellite.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
});

let max_failed_attempts = 3;
iss(max_failed_attempts);

function iss(attempts) {
    if ( attempts <= 0 ) {
        console.log('Too many errors, abandoning requests to get ISS position.');
        return;
    }

    fetch(url)
        .then( res => res.json() )
        .then( iss_position => {
            console.log(iss_position);
            let lat = iss_position.latitude;
            let long = iss_position.longitude;
            issLat.innerHTML = lat;
            issLong.innerHTML = long;

            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: icon}).addTo(map);
            } else {
                issMarker.setLatLng([lat, long]);
            }

            let date = Date();
            time.innerHTML = date
        })
        .catch( err => {
            console.log(err)
        })
        .finally( () => {
        setTimeout(iss, update, attempts)
        })
}
