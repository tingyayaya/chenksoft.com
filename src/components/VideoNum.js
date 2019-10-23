import React, {Component} from 'react'
import { Player } from 'video-react';
import {inject, observer} from 'mobx-react'

import { Link } from 'react-router-dom'
import file from '@/images/file_file.svg'

import '../../node_modules/video-react/dist/video-react.css'
import "./videonum.scss"

@inject('store')
@observer
class VideoNum extends Component {
  constructor() {
    super()
    this.state = {
      pageTotal: '',
      videoId: '',
      currentVideo: {
        video_url: '',
        video_content: '',
        video_title: ''
      },
      nextVideo: {
        flag: true,
        videoId: '',
        video_title: ''
      },
      prevVideo: {
        flag: true,
        videoId: '',
        video_title: ''
      }
    }
  }
  getVideo = async(id) => {
    let currentVideo = await this.props.store.VideoApi._getVideourlById({'id': id})
    let pageTotal = await this.props.store.VideoApi._getVideo()
    let nextVideo={}, prevVideo={};
    if(id-1>0) {
      prevVideo = await this.props.store.VideoApi._getVideourlById({'id':id-1})
      prevVideo.videoId = id-1;
      prevVideo.flag = true
    }else {
      prevVideo.flag = false
    }
    if(id+1<pageTotal) {
      nextVideo = await this.props.store.VideoApi._getVideourlById({'id': id+1})
      nextVideo.videoId = id+1;
      nextVideo.flag = true
    }else {
      nextVideo.flag = false
    }
    
    this.refs.player.load()
    this.setState({
      currentVideo: currentVideo,
      videoId: id,
      nextVideo,
      prevVideo,
      pageTotal
    })
  }
  componentDidMount() {
    const videoId = parseInt(this.props.match.params.videoId) 
    this.getVideo(videoId)
  }
  componentWillReceiveProps(nextprops) {
    const videoId = parseInt(nextprops.match.params.videoId)
    this.getVideo(videoId)
  }
  render() {
    const {currentVideo, nextVideo, prevVideo} = this.state
    let next, prev;
    
    if(nextVideo.flag) {
      next = (
        <div className="next">
          <Link to={`/video/${nextVideo.videoId}`}>下一篇：{nextVideo.video_title}</Link>
        </div>
      )
    }else {
      next= ""
    }
    if(prevVideo.flag) {
      prev = (
        <div className="next">
          <Link to={`/video/${prevVideo.videoId}`}>上一篇：{prevVideo.video_title}</Link>
        </div>
      )
    }else {
      prev = ""
    }
    return (
      <div className="video-num">
        <div className="title">
          <h2>{currentVideo.video_title}</h2>
          <span>{currentVideo.video_content}</span>
        </div>
        <div className="video-player" >
          <Player ref='player'>
            <source src={currentVideo.video_url}/>
          </Player>
        </div>
        <div className="video-bottom">
          {/* <div>
            <h5>附件下载</h5>
            <div className="dowload">
              <img src={file} alt="" className="icon-file"/>
              <a download="register.mp4" href="http://19296577.s21v.faiusr.com/58/ABUIABA6GAAgwt2_5gUou4_27QY.mp4">register.mp4</a>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
export default VideoNum