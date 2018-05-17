const oHTTP = new EasyHTTP;

// Get Users
oHTTP.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@doe.gmail.com'
}

// Post User John Doe
oHTTP.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));


// Change User with index 1
oHTTP.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Delete User with index 1
oHTTP.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(error => console.log(error));
























/**
 * Old logic by using Prototypes
 */

// const oHttp = new easyHTTP();

// // Get Posts
// oHttp.get('https://jsonplaceholder.typicode.com/posts',
//   function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }

//   });

// const data = {
//   title: 'Custom post',
//   body: 'This is a custom post'
// };

// // Create Posts
// oHttp.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// // Change Posts
// oHttp.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// // Delete Post
// oHttp.delete('https://jsonplaceholder.typicode.com/posts/1',
//   function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//   });