// Write your code here

import './index.css'

import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(item => (
            <MovieItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default MoviesSlider
