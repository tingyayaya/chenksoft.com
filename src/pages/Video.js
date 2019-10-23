import React, {Component} from 'react'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import VideoNum from '@/components/VideoNum'
import Footer from '@/components/Footer'

class Video extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <VideoNum {...this.props}/>
        <Footer />
      </div>
    )
  }
}


export default Video