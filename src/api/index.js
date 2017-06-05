import axios from 'axios'

const API = axios.create({
  headers: {
    // Authorization: `token YORU_API_TOKEN`
  }
})

function fetchGitHubRepo (path) {
  let result = API.get(`https://api.github.com/repos/${path}`)
  return result
}

function fetchGitHubSubscribers (path, page) {
  let url = ''
  if (page === 1) {
    url = `https://api.github.com/repos/${path}/subscribers`
  } else {
    url = `https://api.github.com/repos/${path}/subscribers?page=${page}`
  }
  let result = API.get(url)
  return result
}

export {
  fetchGitHubRepo,
  fetchGitHubSubscribers
}
