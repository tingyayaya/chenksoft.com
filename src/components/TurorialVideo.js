import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom'
import video from '@/images/视频.png'
import cases from '@/images/cases.png'
import more from '@/images/more_more.svg'

import './turorialvideo.scss'

@inject('store')
@observer
class TurorialVideo extends Component {
  componentDidMount() {
    this.props.store.VideoApi._getVideo()
  }
  render() {
    const videos = this.props.store.VideoApi.videoListTopThree
    return (
      <div className="session-module border-top turorial-video">
        <div className="content video-content">
          <ul className="content-item"> 
            <div className="title">
              <span>使用教程</span>
              <Link className="more" to='/videolist'>
                <span>查看更多</span> <img src={more} alt=""/>
              </Link>
            </div>
            {
              videos.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/video/${item.id}`} >
                      <img src={item.thumb} alt=""/>
                      <div className="text">
                        <p>{item.video_title}</p> 
                        <span>{item.video_content}</span>
                      </div>
                      <div>
                        2019-09-06
                      </div>
                    </Link>
                  </li>
                )
              })
            }
            
          </ul>
          <div className="content-item cases">
            <div className="title">
              <span>客户案列</span>
              <Link className="more" to='/case'>
                查看更多 <img src={more} alt=""/>
              </Link>
            </div>
            <img src={cases} alt="" />
          </div>
        </div>
        
      </div>
    )
  }
}
export default TurorialVideo