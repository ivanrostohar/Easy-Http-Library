function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make and HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this; // we need this variable so we can access this in onLoad                        function ( since this is function scope !)
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  }

  this.http.send();
}

// Make and HTTP POST Request

// Make and HTTP PUT Request

// Make and HTTP DELETE Request