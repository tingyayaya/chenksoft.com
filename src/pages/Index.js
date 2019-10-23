import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import Loadable from '@/utils/loadable'

//pc端
const Header = Loadable(() => import('@/components/Header'))
const Banner = Loadable(() => import('@/components/Banner'))
const FunctionModule = Loadable(() => import('@/components/FunctionModule'))
const Products = Loadable(() => import('@/components/Products'))
const Industry = Loadable(() => import('@/components/Industry'))
const FourPoint = Loadable(() => import('@/components/FourPoint'))
const TurorialVideo = Loadable(() => import('@/components/TurorialVideo'))
const Footer = Loadable(() => import('@/components/Footer'))

import BackToTop from '@/components/BackToTop'
import ServiceProcess from '@/components/ServiceProcess'

//手机端
const MHeader = Loadable(() => import('@/mobile/MHeader'))
const BannerSwiper = Loadable(() => import('@/mobile/BannerSwiper'))
const ProductImg = Loadable(() => import('@/mobile/ProductImg'))
const FunctionWraper = Loadable(() => import('@/mobile/FunctionWraper'))
const MFooter = Loadable(() => import('@/mobile/MFooter'))
const MCustom = Loadable(() => import('@/mobile/MCustom'))
const MFourPoint = Loadable(() => import('@/mobile/MFourPoint'))
const MIndustry = Loadable(() => import('@/mobile/MIndustry'))

@inject('store')
@observer
class Index extends Component {
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
export default Index

@inject('store')
@observer
class Pc extends Component {
  componentDidMount() {
    this.props.store.InstrodutionApi._getInstroductionIndex()
    this.props.store.AdvIndexApi._getAdvIndex()
    this.props.store.ProductName._getProducts()
  }
  render() {
    //行业
    const { data } = this.props.store.InstrodutionApi
    //特点
    const points = this.props.store.AdvIndexApi.data
    //产品
    const productsNav = this.props.store.ProductName.productsNav
    return (
      <div>
         <BackToTop />
          <Header />
          <Banner />
          { productsNav.length!==1&&<Products /> }
          <FunctionModule />
          { points.length!==0&&<FourPoint />}
          { data.length!==0&&<Industry /> }
          <TurorialVideo />
          <Footer />
      </div>
    )
  }
}




@inject('store')
@observer
class Mobile extends Component {
  componentDidMount() {
    this.props.store.FuncIndexApi._getFuncIndex()
    this.props.store.AdvIndexApi._getAdvIndex()
    this.props.store.ProductName._getProducts()
  }
  render() {
    const { title, data }= this.props.store.FuncIndexApi
    //行业
    const industryitem = this.props.store.InstrodutionApi.data
    //特点
    const points = this.props.store.AdvIndexApi.data

    return (
      <div>
        <MHeader />
        <BannerSwiper />
        <ProductImg />
        <FunctionWraper title={title} data={data}/>
        { points.length!==0&&<MFourPoint />}
        { industryitem!==0&&<MIndustry />}
        <MCustom />
        <MFooter />
      </div>
    )
  }
}