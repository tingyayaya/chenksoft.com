import React, {Component} from 'react'
import Pagination from 'rc-pagination';
import {inject, observer} from 'mobx-react'
import { Link } from 'react-router-dom'

import 'rc-pagination/assets/index.css';
import "./videopage.scss";

@inject('store')
@observer
class VideoPage extends Component {
  componentDidMount() {
    this.props.store.VideoApi._getVideo()
  }
  render() {
    const videos = this.props.store.VideoApi.videoList
    return (
      <div className="video-page">
        <p>视频列表</p>
        <ul className="video">
          {
            videos.map((item, index) => {
              return (
                <Link to={`/video/${item.id}`} key={index}>
                  <li>
                    <span>{item.video_title}</span>
                    <span className="w-icon w-icon-right"></span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        {/* <div className="pagination-p">
        <Pagination3 />
        </div> */}
        
      </div>
    )
  }
}

class Pagination3 extends Component {
  state = {
    current: 1,
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return <Pagination onChange={this.onChange} current={this.state.current} total={120}  pageSize={10}/>;
  }
}
//http://react-component.github.io/pagination/
export default VideoPage