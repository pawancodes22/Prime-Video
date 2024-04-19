// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')
  return (
    <div className="page-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <div className="videos-container">
        <h1>Action</h1>
        <MoviesSlider moviesList={actionMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
