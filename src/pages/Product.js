import React, {Component} from 'react'
import Loadable from '@/utils/loadable'
import { inject, observer } from 'mobx-react'

const Header = Loadable(() => import('@/components/Header'))
const Banner = Loadable(() => import('@/components/Banner'))
const ProductDetail = Loadable(() => import('@/components/ProductDetail'))
const Footer = Loadable(() => import('@/components/Footer'))

import BackToTop from '@/components/BackToTop'

@inject('store')
@observer
class Product extends Component {
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
export default Product

class Pc extends Component {
  render() {
    return (
      <div>
        <BackToTop />
        <Header />
        <Banner />
        <ProductDetail {...this.props}/>
        <Footer />
      </div>
    )
  }
}

const MHeader = Loadable(() => import('@/mobile/MHeader'))
const MProduct = Loadable(() => import('@/mobile/MProduct'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))

class Mobile extends Component {
  render() {
    return (
      <div>
        <MHeader />
        <MProduct {...this.props}/>
        <MFooter />
      </div>
    )
  }
}
