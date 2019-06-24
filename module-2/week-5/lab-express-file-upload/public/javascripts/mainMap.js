function startMap(myLoc) {
  const ironhackBCN = {
    lat: -23.5617951,
    lng: -46.6601595,
  };
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 12,
      center: ironhackBCN,
    },
  );
  const myLocation = new google.maps.Marker({
    position: myLoc,
    map,
    title: "I'm here",
  });
  const myHome = new google.maps.Marker({
    position: {
      lat: -23.592915,
      lng: -46.647689,
    },
    map,
    title: 'I live here',
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const directionRequest = {
    origin: myLoc,
    destination: myHome.position,
    travelMode: 'DRIVING',
  };
  directionsService.route(
    directionRequest,
    (response, status) => {
      if (status === 'OK') {
        // everything is ok
        directionsDisplay.setDirections(response);
      } else {
        // something went wrong
        window.alert(`Directions request failed due to ${  status}`);
      }
    },
  );
  directionsDisplay.setMap(map);
}


function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      startMap(myLoc);
    }, () => {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }
}

getUserLocation();
