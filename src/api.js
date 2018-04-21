
const baseurl = process.env.REACT_APP_SERVICE_URL;

async function get(endpoint) {
  const token = window.localStorage.getItem('token');
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

async function patch(endpoint, inputBody) {
  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;
  
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputBody),
    method: 'PATCH',
  };
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  let response = null;
  try{
    response = await fetch(url, options);
  } catch(e) {
    console.error(e);
  }

  return response.json();
}

async function post(endpoint, inputBody) {
  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;
  
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputBody),
    method: 'POST',
  };
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  let response = null;
  try{
    response = await fetch(url, options);
  } catch(e) {
    console.error(e);
  }

  return response.json();
}

async function postImage(endpoint, inputBody) {
  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;
  
  const options = {
    headers: {},
    body: inputBody,
    method: 'POST',
  };
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  let response = null;
  try{
    response = await fetch(url, options);
  } catch(e) {
    console.error(e);
  }

  return response.json();
}

async function apiDelete(endpoint, inputBody) {
  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;
  
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputBody),
    method: 'DELETE',
  };
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  let response = null;
  try{
    response = await fetch(url, options);
  } catch(e) {
    console.error(e);
  }

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

async function register(username, password, name) {
  const url = `${baseurl}register`;

  const options  = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({
      username,
      password,
      name
    }),
    method: 'POST'
  }
   
  const response = await fetch(url, options);
  return response.json();
}

export default {
  get,
  login,
  register,
  patch,
  post,
  postImage,
  apiDelete,
};
