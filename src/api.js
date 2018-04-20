
const baseurl = process.env.REACT_APP_SERVICE_URL;

async function get(endpoint) {
  const token = window.localStorage.getItem('token');
  console.log(token);
  const url = `${baseurl}${endpoint}`;

  const options = {
    method: "GET",
    headers: {},
  };
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(url, options);
  return response.json();
}


async function login(username, password) {
  const url = `${baseurl}login`;

  const options  = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({
      username,
      password,
    }),
    method: 'POST'
  }
   
  const response = await fetch(url, options);
  return response.json();
}

/* todo aðrar aðgerðir */

export default {
  get,
  login,
};
