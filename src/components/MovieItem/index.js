// Write your code here

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  return (
    <div>
      <div className="popup-container">
        <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
          {close => (
            <div className="popup-bg">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose className="react-icon-size" />
              </button>
              <ReactPlayer url={videoUrl} />
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}
export default MovieItem
