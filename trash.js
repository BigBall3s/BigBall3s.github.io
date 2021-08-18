var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://xbl.io/api/v2/account/2535440036473885",
  "method": "GET",
  "headers": {
    "x-authorization": "gkwksgwsggws8cgs48okwooo4g8sc4g4ows",
    "cache-control": "no-cache",
    "postman-token": "ac7b4f53-128d-508b-4861-a3b876abe71f"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});