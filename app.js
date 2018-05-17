const oHttp = new easyHTTP();

// Get Posts
oHttp.get('https://jsonplaceholder.typicode.com/posts',
  function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }

  });