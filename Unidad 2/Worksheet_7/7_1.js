/* 
    1. Develop a web app in which:
            I. Test if geolocation is available.
            II. If it's available, show the current position (latitude and longitude)
            III. If it isn't available, show a message for each and everyone of the possible errors.
            IV. Improve your code so you show the position continuously (although the user could be in moving, so it could change)
            V. Find the way to meassure the distance traveled.
*/

// I
function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);