import axios from 'axios'
import fetch from 'node-fetch'

async function userInfo(id) {
  try {
    const [user, post] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
    ])
    const data = {...user.data, post: post.data}
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export { userInfo }