import { useNavigate } from 'react-router-dom'

import { Toastcontainer } from '../tools/toast'

const Details = props => {
  const navigate = useNavigate()
  let titleInput
  let contentInput
  console.log(props)
  if (props.post) {
    titleInput = props.post.title
    contentInput = props.post.body
  }
  const cancelPostHandeler = () => navigate('/')

  return (
    <div>
      <Toastcontainer />

      <div className='container'>
        <div className='well'>
          <div className='media'>
            <img className='media-object' src='http://placekitten.com/150/150' alt='kitten' />
            <div className='media-body'>
              <h4 className='media-heading'>{titleInput}</h4>
              <p className='text-right'>By Anailuj</p>
              <p>{contentInput}</p>
              <ul className='list-inline list-unstyled'>
                <li>
                  <span>
                    <i className='glyphicon glyphicon-calendar' /> 2 days, 8 hours{' '}
                  </span>
                </li>
                <li>|</li>
                <span>
                  <i className='glyphicon glyphicon-comment' /> 2 comments
                </span>
                <li>|</li>
                <li>
                  <span className='glyphicon glyphicon-star' />
                  <span className='glyphicon glyphicon-star' />
                  <span className='glyphicon glyphicon-star' />
                  <span className='glyphicon glyphicon-star' />
                  <span className='glyphicon glyphicon-star-empty' />
                </li>
                <li>|</li>
                <li>
                  <span>
                    <i className='fa fa-facebook-square' />
                  </span>
                  <span>
                    <i className='fa fa-twitter-square' />
                  </span>
                  <span>
                    <i className='fa fa-google-plus-square' />
                  </span>
                </li>
              </ul>

              <button className='btn btn-info' type='button' onClick={cancelPostHandeler}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
