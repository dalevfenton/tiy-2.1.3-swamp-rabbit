function initMap() {
    var mapDiv = document.getElementById('map');
    var myLatLng = {lat: 34.8469787, lng: -82.3944238};
    var markerLatLng = {lat: 34.8429787, lng: -82.4144238};
    var map = new google.maps.Map(mapDiv, {
      scrollwheel: false,
      center: myLatLng,
      zoom: 14,
      disableDefaultUI: true
    });
    var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);

    var contentString = '<div id="content" class="map-info">'+
      '<h3 id="firstHeading" class="firstHeading">Swamp Rabbit Cycling</h3>'+
      '<div id="bodyContent">'+
      '<p>Visit, call or email us today and get the most out of your bike riding experience!</p>'+
      '<p><b>Address:</b> 123 Cycle St Greenville, SC 29606</p>'+
      '<p><b>Phone:</b> (864) 555-0127</p>'+
      '<p><b>Email:</b> <a href="mailto:swamprabbitcycling@example.com">swamprabbitcycling@example.com</a></p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString,
    });

    var marker = new google.maps.Marker({
    position: markerLatLng,
    map: map,
    title: 'Swamp Rabbit Cycling'
    });

    infowindow.open(map, marker);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
