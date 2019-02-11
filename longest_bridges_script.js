//starting point for map
let starting_point = [40, -95];

//Create the map
//the number at the end is the zoom level
let map = L.map('bridges-map').setView(starting_point, 3);


//add the tile layer - roads, streets etc
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmFvbHNvbjIwNTAiLCJhIjoiY2pyemdxcHc1MThpZzRhbzhqajJmOHV1YyJ9.EvtKnDOUdT8OMjzz8fxL9A'
}).addTo(map);


var bridge_icon = L.icon({
    iconUrl: 'bridge_icon_32px.png',
    iconSize: [40, 40],
    iconAnchor: [15, 15]
});

//Adding bridge locations
let verrazano_Narrows_Bridge = [40.6066, -74.0447];
let verrazano_marker = L.marker(verrazano_Narrows_Bridge, {icon: bridge_icon})
    .bindPopup("Verrazano Narrows Bridge<br>Length: 1298.4 meters")
    .addTo(map);


let golden_gate_bridge = [37.8199, -122.4783];
let golden_gate_marker = L.marker(golden_gate_bridge, {icon: bridge_icon})
    .bindPopup("Golden Gate Bridge<br>Length: 1280.2 meters")
    .addTo(map);


let mackinac_bridge = [45.8174, -84.7278];
let mackinac_marker = L.marker(mackinac_bridge, {icon: bridge_icon})
    .bindPopup('Mackinac Bridge<br>Length: 1158 meters')
    .addTo(map);


let george_washington_bridge = [40.8517, -73.9527];
let george_washington_marker = L.marker(george_washington_bridge, {icon: bridge_icon})
    .bindPopup("George Washington Bridge<br>Length: 1067 meters")
    .addTo(map);


let tacoma_narrows_bridge = [47.2690, -122.5517];
let tacoma_narrows_marker = L.marker(tacoma_narrows_bridge, {icon: bridge_icon})
    .bindPopup("Tacoma Narrows Bridge<br>Length: 853.44 meters")
    .addTo(map);
