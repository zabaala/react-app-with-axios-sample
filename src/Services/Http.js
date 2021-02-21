import axios from "axios";

const Http = () => {
  const axiosConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.create(axiosConfig)
}

export default Http;