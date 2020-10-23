import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Video } from './Video'
import * as videoService from './VideoService'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router-dom'

export const VideoForm = () => {

  interface Params {
    id: string
  }

  const history = useHistory()
  const params = useParams<Params>()

  useEffect(() => {
    if (params.id) {
      getVideo(params.id)
    }
  })

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id)
    setVideo(res.data)
  }


  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const [video, setVideo] = useState<Video>({ title: '', description: '', url: '' })


  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleDelete = async (id: string) => {
    videoService.deleteVideo(id)
    history.push('/')
    toast.success('Video Deleted')
  }


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.createVideo(video)
      toast.success('New video added')
    } else {
      await videoService.updateVideo(params.id, video)
      toast.success('Video Updated')

    }


    history.push('/')
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            {params.id ?
              <div className="d-flex justify-content-between">
                <h3>Update</h3>
                <span className="badge badge-danger mb-3" style={{cursor: 'pointer'}} onClick={() => video._id && handleDelete(video._id)}>Delete Video</span>
              </div>
              :
            <h3>New video</h3>
            }

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="url"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  value={video.url}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  value={video.description}
                  placeholder="Write a description"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {
                params.id ?
                  <button className="btn btn-block btn-primary">
                    Update Video
                  </button>
                  :
                  <button className="btn btn-block btn-primary">
                    Create Video
                  </button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
