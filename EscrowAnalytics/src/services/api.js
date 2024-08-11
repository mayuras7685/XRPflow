const API_BASE_URL = "http://localhost:5000/api"

export const get = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  return response.json()
}

export const post = async (endpoint, data) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response.json()
}
