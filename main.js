var mymap = L.map('mapid').setView([39.9526, -75.16522], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);
var data_points  = new L.geoJson(window.data, {
  onEachFeature: function(feature,layer) {
    var description = 'Occured on ' + feature.properties.date_ + ' at ' + 
      feature.properties.location + '. There were ' + feature.properties.fatal + ' fatalities.'
    feature.popupContent = description
    layer.bindPopup(feature.popupContent)
  }
});
var markers = L.markerClusterGroup(); 
markers.addLayer(data_points)
mymap.addLayer(markers)
