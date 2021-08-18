var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://xbl.io/api/v2/account/2535440036473885");
xhr.setRequestHeader("x-authorization", "gkwksgwsggws8cgs48okwooo4g8sc4g4ows");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "eb60da24-1cf8-2c7b-081c-d76f01b56835");

xhr.send(data);