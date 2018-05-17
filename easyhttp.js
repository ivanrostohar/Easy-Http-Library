/**
 * New Version using Async and await 
 */
class EasyHTTP {
  // Make GET Request
  async get(url) {
    const response = await fetch(url);
    return await response.json();
  }

  // make POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  // make PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  // make DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    return await 'JSON Record has been deleted';
  }
}