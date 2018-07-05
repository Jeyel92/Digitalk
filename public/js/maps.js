function myMap() {
    geocoder = new google.maps.Geocoder();

    var myCenter = new google.maps.LatLng(-23.554172, -46.6644255);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel:true, draggable:true
      //  mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


    geocoder.geocode( { 'address': "inovaBra habitat"}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });



    

    // var marker = new google.maps.Marker({
    //     position: myCenter
    // });
    // marker.setMap(map);
}

