const BASE_URL = 'http://localhost:8080/posts'

export const HomeAPI = () =>
  fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

export const AllPostsAPI = () =>
  fetch(`${BASE_URL}/all`, {
    method: 'Get'
  })

export const getPostAPI = id =>
  fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
