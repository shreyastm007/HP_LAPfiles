function showPosition() {
  navigator.geolocation.getCurrentPosition(showMap, error);
}

function showMap(position) {
  // Get location data
  var mylatlong = position.coords.latitude + "," + position.coords.longitude;

  // Set Google map source url
  var mapLink =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    mylatlong +
    "&size=50x50";

  // Create and insert Google map
  document.getElementById("embedMap").innerHTML =
    "<img alt='Map Holder' src='" + mapLink + "'>";
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
