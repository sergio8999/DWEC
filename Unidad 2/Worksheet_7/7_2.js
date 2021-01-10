/* 
    1. Let's try to use the geolocation information with the API of LeafletJS.
        I. Use a map to show your location
        II. Draw a marker in your location
*/



 function success(pos) {
    var crd = pos.coords;
    var latitud = crd.latitude;
    var longitud = crd.longitude;

    var map = L.map('mapid').setView([latitud,longitud], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud,longitud]).addTo(map)
        .bindPopup('Estamos aqui.')
        .openPopup();
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);
 
/* function success(pos) {
    var crd = pos.coords;
    var latitud = crd.latitude;
    var longitud = crd.longitude;

    var map = L.map('mapid').setView([37.192524, -3.616371], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([37.192524, -3.616371]).addTo(map)
        .bindPopup('Jungle home')
        .openPopup();
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  } 
  
  navigator.geolocation.getCurrentPosition(success, error);*/

  