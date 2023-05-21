import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { HomeAPI } from '../api/posts'
import Layout from '../components/Layout/Layout'
import { Toastcontainer, ToastError } from '../tools/toast'

const Home = () => {
  const navigate = useNavigate()
  const [id, setId] = useState()
  const [error, setError] = useState()

  let err = new Error()

  const postsAPIHandeler = () => {
    HomeAPI()
      .then(res => {
        err.status = res.status
        return res.json()
      })
      .then(data => {
        if (err.status !== 200) {
          throw new Error(data.message)
        }
      })
      .catch(err => {
        ToastError('Posts added')
      })
  }
  const postsHandeler = () => {
    postsAPIHandeler()
  }
  const detailsHandeler = e => {
    e.preventDefault()
    if (id < 1 || id > 10) setError('Id not in given range')
    else navigate(`/details/${id}`)
  }

  return (
    <div>
      <Layout />
      <center>
        <div className='container'>
          <div className='row'>
            <div className=''>
              <h1>Home</h1>
              <div className='form-group my-5'>
                <button
                  type='button'
                  data-testid='postsbutton'
                  onClick={postsHandeler}
                  className='btn btn-primary'
                >
                  Push Posts
                </button>

                <Toastcontainer />
              </div>
            </div>
          </div>
        </div>
        <form action=' ' onSubmit={detailsHandeler}>
          <label htmlFor='title'>
            Id <span className='require'>(1-10)*</span>
          </label>
          <input
            data-testid='id'
            type='number'
            className='form-control my-2 w-25'
            placeholder='id'
            name='title'
            onChange={e => setId(e.target.value)}
            required
          />
          <div id='cname' className='text-danger'>
            {error}
          </div>
          <button type='submit' data-testid='sendbutton' className='btn btn-primary'>
            Send
          </button>
          <Toastcontainer />
        </form>
      </center>
    </div>
  )
}

export default Home
