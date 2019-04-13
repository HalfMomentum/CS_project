
const express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function myFunction(){
  $(".footer-content").hide();
}

app.get("/api/maps",(req,res)=>{
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    qs:
     { placeid: 'ChIJq6qqqk7rDDkRTIcYZ3USFDI',
       fields: 'name,url,price_level,reviews,rating,photos,formatted_phone_number',
       key: 'AIzaSyB-Ykp-FMb4dJasTNaooTKQ-ejJXEcldJY' },
    headers:
     { 'Postman-Token': '3a8dff97-fbc8-4cf3-95d3-3f3734f54091',
       'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });

});


const PORT = 3333;
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})
