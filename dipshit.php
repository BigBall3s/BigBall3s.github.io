<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://xbl.io/api/v2/friends?xuid=2535440036473885",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: a06244a0-d33f-4f5d-c578-c837525fddc3",
    "x-authorization: gkwksgwsggws8cgs48okwooo4g8sc4g4ows"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>