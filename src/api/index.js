import axios from 'axios'

export function fetchGitHubRepo (path) {
  let result = axios.get(`https://api.github.com/repos/${path}`, {
    headers: {
      Authorization: `token 93a6403eebb8400814573969e79db6c8994ee707`
    }
  })
  return result
}
