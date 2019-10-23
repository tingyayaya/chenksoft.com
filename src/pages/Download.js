import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import Loadable from '@/utils/loadable'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import DownloadAddress from '@/components/DownloadAddress'

import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

@inject('store')
@observer
class Download extends Component {
  componentDidMount() {
    this.props.store.isPc.getResult()
  }
  render() {
    const { flag } = this.props.store.isPc
    return (
      <div>
        {flag ? <Pc {...this.props}/>: <Mobile {...this.props}/>}
      </div>
    )
  }
}
export default Download



class Pc extends Component {
  render() {
    return (
      <div>
        <BackToTop />
        <Header />
        <Banner />
        <DownloadAddress {...this.props}/>
        <Footer />
      </div>
    )
  }
}

const MHeader = Loadable(() => import('@/mobile/MHeader'))
const MDownlod = Loadable(() => import('@/mobile/MDownload'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))

class Mobile extends Component {
  render() {
    return (
      <div>
        <MHeader />
        <MDownlod {...this.props}/>
        <MFooter />
      </div>
    )
  }
}