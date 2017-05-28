import axios from 'axios'

export function fetchGitHubRepo (path) {
  let result = axios.get(`https://api.github.com/repos/${path}`, {
    headers: {
      Authorization: `token YORU_API_TOKEN`
    }
  })
  return result
}
