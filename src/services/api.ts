import axios from "axios"

const API_BASE_URL = "http://localhost:3001"

const api = axios.create({
  baseURL: API_BASE_URL,
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authApi = {
  login: (data: { username: string; password: string }) => api.post("/auth/login", data),

  register: (data: { username: string; password: string }) => api.post("/auth/register", data),

  getProfile: () => api.get("/auth/me"),
}

export default api
