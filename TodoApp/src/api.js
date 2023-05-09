import axios from 'axios'
import Constants from 'expo-constants';

const api = axios.create({
  baseURL: `http://${Constants.manifest.debuggerHost.split(':').shift()}:8000/api/`,
})

export default api