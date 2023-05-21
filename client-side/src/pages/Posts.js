import { useEffect, useState } from 'react'

import { AllPostsAPI } from '../api/posts'
import PostsList from '../components/Posts/PostsList'
import { Toastcontainer, ToastError } from '../tools/toast'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const err = new Error()

  useEffect(() => {
    AllPostsAPI()
      .then(res => {
        err.status = res.status
        return res.json()
      })
      .then(data => {
        if (err.status !== 200) {
          throw new Error(data.message)
        }
        setPosts(data)
      })
      .catch(err => {
        ToastError(err)
      })
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {posts.length === 0 ? (
        <p className='text-center h1 my-3 '>No Posts Available</p>
      ) : (
        <div>
          <PostsList posts={posts} />
          <Toastcontainer />
        </div>
      )}
    </div>
  )
}

export default Posts
