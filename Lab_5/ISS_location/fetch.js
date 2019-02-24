let url = 'https://api.wheretheiss.at/v1/satellites/25544';

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let time = document.querySelector('#time');

let issMarker;  // Leaflet marker
let update = 10000;  // 10 seconds

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
iss(max_failed_attempts);   // initial call to function. Once the fetch request has been made, the iss function
// will call itself again, after a delay of update miliseconds, if the max number of failed attempts is not exceeded.

function iss(attempts) {
    if ( attempts <= 0 ) {
        console.log('Too many errors, abandoning requests to get ISS position.')
        return;    // Since setTimeout is not called again, no more attempts to fetch will be made
    }

    fetch(url)
        .then( res => res.json() )
        .then( issData => {
            console.log(issData);
            let lat = issData.latitude;
            let long = issData.longitude;
            issLat.innerHTML = lat;
            issLong.innerHTML = long;

            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: icon}).addTo(map); // Create the marker
            } else {
                issMarker.setLatLng([lat, long]); // Already exists - move to new location
            }

            // Update the time element to the current date and time
            let date = Date();
            time.innerHTML = date

        })
        .catch( err => {
            console.log(err)
        })
        .finally( () => {
        // finally runs whether the fetch() worked or failed.
        // Call the iss function after a delay of update miliseconds to update the position
        setTimeout(iss, update, attempts)
        })
}
