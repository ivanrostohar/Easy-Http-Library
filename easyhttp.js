/**
 * New Version using Promisses and Fetch and Classe  
 */

class EasyHTTP {
  // Make GET Tequest
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // make POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }

  // make PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }

  // make DELETE Request
  put(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(() => resolve('User Deleted'))
        .catch(error => reject(error))
    });
  }
}



























////////////////////////////////////////////////////////////////////////////
/** This is logic created with Prototypes and ES5
 * Uncomment if you want to test it 
 */
////////////////////////////////////////////////////////////////////////////
// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }

// // Make and HTTP GET Request
// easyHTTP.prototype.get = function (url, callback) {
//   this.http.open('GET', url, true);
//   let self = this; // we need this variable so we can access this in onLoad                        function ( since this is function scope !)
//   this.http.onload = function () {
//     if (self.http.status === 200) {
//       callback(null, self.http.responseText);
//     } else {
//       callback('Error:' + self.http.status);
//     }
//   }

//   this.http.send();
// }

// // Make and HTTP POST Request
// easyHTTP.prototype.post = function (url, data, callback) {
//   this.http.open('POST', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function () {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make and HTTP PUT Request
// easyHTTP.prototype.put = function (url, data, callback) {
//   this.http.open('PUT', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function () {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make and HTTP DELETE Request
// easyHTTP.prototype.delete = function (url, callback) {
//   this.http.open('DELETE', url, true);
//   let self = this; // we need this variable so we can access this in onLoad                        function ( since this is function scope !)
//   this.http.onload = function () {
//     if (self.http.status === 200) {
//       callback(null, 'Post deleted');
//     } else {
//       callback('Error:' + self.http.status);
//     }
//   }

//   this.http.send();
// }