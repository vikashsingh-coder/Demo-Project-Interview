const API = 'http://localhost:4000'

export const fetchWithCred = async (url, options = {}) => fetch(`${API}${url}`, {
    ...options,
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        ...options.headers
    }
})
