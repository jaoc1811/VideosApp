import React, { useEffect, useState } from 'react'
import {Video} from './Video'
import { VideoItem } from './VideoItem'
import * as videoService from './VideoService'

export const VideoList = () => {

  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    (async () => {
      const res = await videoService.getVideos()
      setVideos(res.data)
    })()
  }, [])

  return (
    <div className="row">
      {videos.map(video => (
        <VideoItem video={video} key={video._id}/>
      ))}
    </div>
  )
}
