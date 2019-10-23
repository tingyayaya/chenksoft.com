import React, {Component} from 'react'
import { NavLink, Link} from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './header.scss'
import imglogo from '@/images/logo.png'
import hotline from '@/images/电话.svg'

const MENU1 = [
  {
    path: '/',
    name: '首页',
    exact: true
  },
  {
    path: '/product',
    name: '产品'
  },
  {
    path: '/download',
    name: '软件下载'
  },
  {
    path: '/case',
    name: '客户案列'
  },
  {
    path: '/contact',
    name: '联系我们'
  },
  {
    path: '/about',
    name: '关于我们'
  }
]

@inject('store')
@observer
class Header extends Component {
  constructor() {
    super() 
    this.state = {
      hasData: false
    }
  }
  componentDidMount() {
    this.props.store.ProductName._getProducts()
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    const { match } = this.props;
    const MENU = this.props.store.ProductName.menu;
    const SysName = this.props.store.SysNameApi.data;
    return (
      <header className="header">
        <div className="hotline"><img src={hotline} />  <span>400-6990-220</span></div>
        <div className="nav">
          <img src={imglogo} alt="" className="logo"/> <span className="system_name">{SysName}</span>
          <ul className="navagition">
            {
              MENU.map((item, index) => {
                return <Menu item={item} key={index}/>
              })
            }
            {/* <li><NavLink to='/' exact activeClassName='active'>首页</NavLink></li>
            <li><NavLink to='/download' activeClassName='active'>软件下载</NavLink></li>
            <li><NavLink to='/case' activeClassName='active'>客户案列</NavLink></li>
            <li><NavLink to='/contact' activeClassName='active'>联系我们</NavLink></li>
            <li><NavLink to='/about' activeClassName='active'>关于我们</NavLink></li> */}
          </ul>
        </div>
      </header>
    )
  }
}


class Menu extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleEnter() {
    if(this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      show: true
    })
  }
  handleOut() {
    this.timer = setInterval(() => {
      this.setState({
        show: false
      })
    },500);
  }
  componentWillUnmount () {
    if(this.timer) {
      clearInterval(this.timer);
    }
  }
  handleSubnav(e) {
    this.setState({
      show: e
    })
  }
  render() {
    const {item} = this.props
    let Nav;
    if(item.subnav) {
      if(item.subnav.length===1) {
        Nav =  (
          <NavLink to={`/product/${item.subnav[0].id}`} activeClassName='active'>产品</NavLink>
        )
      }else{
        Nav = (
          <span onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleOut.bind(this)}>
            {this.state.show? <Subnav subnav={item.subnav} handleSubnav={this.handleSubnav.bind(this)}/>: ''}
            <span >{item.name}</span>
          </span>
        )
      }
    }else {
      Nav =  (
        <NavLink to={item.path} activeClassName='active' exact={item.exact} >{item.name}</NavLink>
      )
    }
    
    return (
      <li>
        { Nav }
        {/* {item.subnav? 
          <span onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleOut.bind(this)}>
            {this.state.show? <Subnav subnav={item.subnav}/>: ''}
            <span >{item.name}</span>
          </span>
          : <NavLink to={item.path} activeClassName='active' exact={item.exact} >{item.name}</NavLink>} */}
      </li>
    ) 
  }
}


class Subnav extends Component {
  handleSubnav() {
    this.props.handleSubnav(false)
  }
  render() {
    const data  = this.props.subnav
    return (
      <ul className="sub-nav">
        {
          data.map((item, index) => {
            return <li key={index} ><Link to={`/product/${item.id}`} onClick={this.handleSubnav.bind(this)}>{item.pro_name}</Link></li>
          })
        }
      </ul>
    )
  }
}

export default Header