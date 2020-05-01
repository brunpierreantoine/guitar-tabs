import axios from 'axios'

// Create an axios object pointing to our backend URL
export default() => {
  return axios.create({
    baseURL: `http://localhost:8081/`

  })
}
