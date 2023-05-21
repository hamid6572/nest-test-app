import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getPostAPI } from '../api/posts'
import Layout from '../components/Layout/Layout'
import { ToastError } from '../tools/toast'
import Spinner from './Spinner'
import Subdetails from './Subdetails'

const Details = () => {
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  let err = new Error()

  const getPost = async () => {
    const response = await getPostAPI(id)
    return response.json()
  }
  useEffect(() => {
    getPost()
      .then(data => {
        setIsLoading(false)
        err.status = data.statusCode
        if (err.status !== 200) {
          throw new Error('validation error')
        }
        setPost(data)
      })
      .catch(err => {
        ToastError(err)
      })
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <Layout />
      {isLoading ? <Spinner /> : <Subdetails post={post} />}
    </div>
  )
}

export default Details
