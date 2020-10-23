import React from 'react'
import { Video } from './Video'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'
import './VideoItem.css'

interface Props {
  video: Video
}

export const VideoItem = ({ video }: Props) => {

  const history = useHistory();

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body video-card" onClick={() => history.push(`/update/${video._id}`)}>
          <h2 className="card-title" >{video.title}</h2>
          <p className="card-text">{video.description}</p>
          <div className="embed-responsive embed-responsive-16by9">
            <ReactPlayer url={video.url} />
          </div>
        </div>
      </div>
    </div>
  )
}
