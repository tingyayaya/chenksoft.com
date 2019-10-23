import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import imglogo from '@/images/white-logo.svg'

import regScroll from '@/utils/regScroll'

import './mheader.scss'

@inject('store')
@observer
class Mheader extends Component {
  constructor() {
    super()
    this.state = {
      isThemeToBlack: false,
      isDown: false,
      isSubMenuDown: true
    }
  }
  unfloadMenu() {
    const { isDown } = this.state
    this.setState({
      isDown: !isDown,
      isSubMenuDown: true,
      isThemeToBlack: true,
    })
    //弹出层层设置禁止滚动
    if(!isDown) {
      document.documentElement.style.overflow='hidden';
      document.body.style.overflow='hidden'
    }else {
      document.documentElement.style.overflow='';
      document.body.style.overflow=''
    }
  }
  unfloadSubMenu() {
    const { isSubMenuDown } = this.state
    this.setState({
      isSubMenuDown: !isSubMenuDown
    })
  }
  _scroll() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop>=70) {
      this.setState({
        isThemeToBlack: true
      })
    }else {
      this.setState({
        isThemeToBlack: false,
      })
    }
  }
  componentDidMount() {
    window.scrollTo( 0, 0)
    this.props.store.ProductName._getProducts()
    //react 内存泄露
    regScroll(this._scroll.bind(this));
  }
  componentWillUnmount() {
    document.documentElement.style.overflow='';
    document.body.style.overflow=''
    window.onscroll = ''
  }
  componentWillReceiveProps(nextProps) {
    //产品页切换时 确保收起
    window.scrollTo( 0, 0)
    this.setState({
      isDown: false,
      isSubMenuDown: false,
      isThemeToBlack: false,
    })
    document.documentElement.style.overflow='';
    document.body.style.overflow=''
  }
  render() {
    const MENU = this.props.store.ProductName.productsNav;
    return (
      <header className={`M-header-moudle`}>
        <div className={`head-inner ${this.state.isThemeToBlack? 'header-theme-black': ""}`}>
          <Link to='/' className="logo"><img src={imglogo} alt=""/> </Link>
          <div className={`${this.state.isDown? 'close-white': "sort-white"}`} onClick={this.unfloadMenu.bind(this)}></div>
        </div>
        <ul className={`fist-layer ${this.state.isDown? 'show': "hide"}`}>
          <li><Link to="/" >首页</Link></li>
          <li>
            <div className="layer-head"  onClick={this.unfloadSubMenu.bind(this)}>
              <span>产品</span>
              <i className={`icon-arrow ${this.state.isSubMenuDown? 'down-white': "up-white"}`} 
             ></i>
            </div>
            <ul className={`second-layer ${this.state.isSubMenuDown? 'show': "hide"}`}>
              {
                MENU.map((item, index) => {
                  return <li key={index}><Link to={`/product/${item.id}`}>{item.pro_name}</Link></li>
                })
              }
            </ul>
          </li>
          <li><Link to="/custom" >定制服务</Link></li>
          <li><Link to="/download" >下载</Link></li>
          <li><Link to="/contact" >联系我们</Link></li>
          <li><Link to="/about" >关于我们</Link></li>
        </ul>
        <div className={`maskin ${this.state.isDown? 'show': "hide"}`} onClick={this.unfloadMenu.bind(this)}></div>
      </header>
    )
  }
}
export default Mheader