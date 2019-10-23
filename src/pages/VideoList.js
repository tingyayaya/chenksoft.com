import React, {Component} from 'react'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import VideoPage from '@/components/VideoPage'
import Footer from '@/components/Footer'

class VideoList extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <VideoPage />
        <Footer />
      </div>
    )
  }
}


export default VideoList