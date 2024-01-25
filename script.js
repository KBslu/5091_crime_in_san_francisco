// Define a custom icon for the crime points
var crimeIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/KBslu/awesome_app/0d5ee6e4ac2407e57a5849b68d55c6c7a0b21803/Images/%E2%80%94Pngtree%E2%80%94dark%20gray%20cartoon%20handcuffs%20clipart_5891912.png',
    iconSize: [38, 38],  // Size of the icon
    iconAnchor: [19, 19],  // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -19]  // Point from which the popup should open relative to the iconAnchor
});

// Initialize the map and set its view to San Francisco
var map = L.map('map').setView([37.7, -122.4], 10);

// Load a Stamen tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by Stamen Design, CC BY 3.0 &mdash; Map data © OpenStreetMap contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// Load the GeoJSON data from the provided URL
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data) {
  // Add GeoJSON layer to the map once the file is loaded
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      //  create a marker with the custom crime icon
      return L.marker(latlng, {icon: crimeIcon});
    }
  }).addTo(map);
});
