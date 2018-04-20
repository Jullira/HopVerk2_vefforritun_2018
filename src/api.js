
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
  //const token = window.localStorage.getItem('token');

  const url = `${baseurl}login`;

  const settings = {
    headers: {
      'Content-type': 'application/json'
    },
    data: {
      username,
      password
    },
    method: 'POST',
    "async": true,
    "crossDomain": true
  }
   
  /*
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }*/
  
  const response = await fetch(url, settings);
  

  console.log(response);
  return response.json();
}

/* todo aðrar aðgerðir */

export default {
  get,
  login,
};
