const PostsItem = props => {
  return (
    <center>
      {
        <div className='card my-2' style={{ width: '25rem' }}>
          <div className='card-body'>
            <h4 className='card-title'>{props.post.title}</h4>

            <p className='card-text my-5'>{props.post.body}</p>
          </div>
        </div>
      }
    </center>
  )
}

export default PostsItem
