$(document).ready(()=>{
  console.log("HEllo");


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3333/api/maps",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "ba5c6ebb-1f3f-49b1-84c9-167e70d381ca"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });


});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
