var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://xbl.io/api/v2/account/2535440036473885",
  "method": "GET",
  "headers": {
    "x-authorization": "gkwksgwsggws8cgs48okwooo4g8sc4g4ows",
    "cache-control": "no-cache",
    "postman-token": "88836628-b4d0-be3a-6577-e848cf0e2a40"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});