  var app = new Vue({
    el: '#app',
    data: {
      hotels: [],
      message: 'Hello Vue!'
    },
    mounted() {
      $('.menu .item').tab();
      $('.ui.rating').rating('disable');
      this.get_hotels();
    },
    methods: {
      get_hotels() {
        $.ajax({
          url: "http://localhost:3333/api/maps",
          success: (data) => {
            var response = JSON.parse( data);
            this.hotels = response.results;            
            console.log(this.hotels[0]);
            
          }
        });
      }
    },
  })