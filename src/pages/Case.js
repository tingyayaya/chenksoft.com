import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import Loadable from '@/utils/loadable'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import CaseLogo from '@/components/CaseLogo'
import CaseList from '@/components/CaseList'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

@inject('store')
@observer
class Case extends Component {
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
export default Case

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
        <CaseLogo />
        <CaseList />
        <Footer />
      </div>
    )
  }
}

const MHeader = Loadable(() => import('@/mobile/MHeader'))
const MCase = Loadable(() => import('@/mobile/MCase'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))

class Mobile extends Component {
  render() {
    return (
      <div>
        <MHeader />
        <MCase />
        <MFooter />
      </div>
    )
  }
}