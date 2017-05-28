import axios from 'axios'

const API = axios.create({
  headers: {
    Authorization: `token YORU_API_TOKEN`
  }
})

function fetchGitHubRepo (path) {
  let result = API.get(`https://api.github.com/repos/${path}`)
  return result
}

function fetchGitHubSubscribers (path) {
  let result = API.get(`https://api.github.com/repos/${path}/subscribers`)
  return result
}

export {
  fetchGitHubRepo,
  fetchGitHubSubscribers
}
