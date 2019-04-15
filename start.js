  var app = new Vue({
    el: '#app',
    data: {
      start: "",
      end: "",
      waypoint: "",
      hotels: [],
      message: 'Hello Vue!',
      myLocation: {
        lat: 28.6139,
        lng: 77.2090
      },
      directionsService: null,
      directionsDisplay: null
    },
    mounted() {
      $('.menu .item').tab();
      $('.ui.rating').rating('disable');
      this.get_hotels();
      this.initMap();
    },
    methods: {
      get_hotels() {
        $.ajax({
          url: "http://localhost:3333/api/maps",
          success: (data) => {
            var response = JSON.parse(data);
            console.log(response);
            this.hotels = response.results;
          }
        });
      },
      initMap() {
        var mapCanvas = $('#map')[0];
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(mapCanvas, {
          zoom: 11,
          center: {
            lat: 28.6139,
            lng: 77.2090
          }
        });
        this.directionsDisplay.setMap(map);
        console.log("--some init value");

        console.log(this.directionsDisplay);
        console.log(this.directionsService);
        console.log("some init value--");

      },
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          console.log("Not supported");
        }
      },
      showPosition(position) {
        this.myLocation.lat = position.coords.latitude;
        this.myLocation.lng = position.coords.longitude;
        console.log(this.myLocation);

      },

      calculateAndDisplayRoute() {
        console.log(this.waypoint);
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            waypoints: this.waypoint,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
          },
          (response, status) => {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
              var route = response.routes[0];
              console.log(route);
            } else {
              console.log('Direction miss Direction');

            }
          }
        )

      }
    },
  })