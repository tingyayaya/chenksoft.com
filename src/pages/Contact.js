import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import Loadable from '@/utils/loadable'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ContactContent from '@/components/ContactContent'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

@inject('store')
@observer
class Contact extends Component {
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
export default Contact

class Pc extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <BackToTop />
        <Header />
        <Banner />
        <ContactContent />
        <Footer />
      </div>
    )
  }
}

const MHeader = Loadable(() => import('@/mobile/MHeader'))
const MContact = Loadable(() => import('@/mobile/MContact'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))

class Mobile extends Component {
  render() {
    return (
      <div>
        <MHeader />
        <MContact />
        <MFooter />
      </div>
    )
  }
}