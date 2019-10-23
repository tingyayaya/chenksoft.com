import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import Loadable from '@/utils/loadable'

//pc端
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'
const CustomServies = Loadable(() => import('@/components/CustomServies'))

@inject('store')
@observer
class Custom extends Component {
  componentDidMount() {
    this.props.store.isPc.getResult()
  }
  render() {
    const { flag } = this.props.store.isPc
    return (
      <div>
        {flag ? <Pc />: <Mobile />}
      </div>
    )
  }
}
export default Custom

class Pc extends Component {
  render() {
    return (
      <div>
        <BackToTop />
        <Header />
        <Banner />
        <CustomServies />
        <Footer />
      </div>
    )
  }
}

const MHeader = Loadable(() => import('@/mobile/MHeader'))
const MService = Loadable(() => import('@/mobile/Mservice'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))

class Mobile extends Component {
  render() {
    return (
      <div>
        <MHeader />
        <MService />
        <MFooter />
      </div>
    )
  }
}