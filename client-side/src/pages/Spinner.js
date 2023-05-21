import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div>
      <div style={style}>
        <ThreeDots type='ThreeDots' color='#55c57a' height={80} width={80} />
      </div>
    </div>
  )
}

export default Spinner
