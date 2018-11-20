"use strict";

window.Backend = (function(data) {
  var SERVER_URL = "https://www.sima-land.ru/api/v3/item/";
  return {
    load: function(data) {
      var XHR =
        "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
      var xhr = new XHR();
      xhr.open("GET", "SERVER_URL", data);
      xhr.onload = function() {
        alert(this.responseText);
      };
      xhr.onerror = function() {
        alert("Ошибка " + this.status);
      };
      xhr.send();
    }
  };
})();
