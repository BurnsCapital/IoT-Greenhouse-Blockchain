Blockchain Green house project



Folder structure

-core          : local blockchain and sensor js modules
 |__configFiles : chain config files

-local : local drivers for sensors

-public
 |__css : client side custom css
 |__img : client side images
 |__js  : client side js files

-views        : web page templates
 |__layouts    : main template
 |__partials   : breakouts

 app.js


 #Overview
 The fully functional system should:
      - read sensors
      - display live data
      - logs data locally
      - add the daily log to an ipfs file
      - makes blockchain attestations of daily logs
