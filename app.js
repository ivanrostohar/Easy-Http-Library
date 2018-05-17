const oHTTP = new EasyHTTP;

// Get Users
oHTTP.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('GET' + '\n' + data))
  .catch(error => console.log(error));

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@doe.gmail.com'
}

// Post User John Doe
oHTTP.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log('POST ' + '\n' + data))
  .catch(error => console.log(error));

// Change User with index 1
oHTTP.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log('PUT ' + '\n' + data))
  .catch(error => console.log(error));

// Delete User with index 1
oHTTP.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log('DELETE ' + '\n' + data))
  .catch(error => console.log(error));