
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
  
  /* todo framkvæma get */
  const response = await fetch(url, options);
  return response.json();
}

/* todo aðrar aðgerðir */

export default {
  get,
};
