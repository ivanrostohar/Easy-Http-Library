const oHttp = new easyHTTP();

// Get Posts
// oHttp.get('https://jsonplaceholder.typicode.com/posts',
//   function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }

//   });

const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

// Create Posts
oHttp.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// Change Posts
oHttp.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// Delete Post
oHttp.delete('https://jsonplaceholder.typicode.com/posts/1',
  function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  });