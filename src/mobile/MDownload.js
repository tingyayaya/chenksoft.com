import React, {Component} from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import banner from '@/images/ba_download.jpg'

import icon3 from '@/images/windows.svg'
import icon2 from '@/images/ios.svg'
import icon1 from '@/images/andriod.svg'

import windows from '@/images/windows-grey.svg'
import ios from '@/images/ios-grey.svg'
import android from '@/images/android-grey.svg'

import download from '@/images/download.png'
import './mdownload.scss'

class Download extends Component {
  componentDidMount() {
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    const { data } = this.props.store.SysNameApi
    return (
      <div className="mdownload-modules">
        <div className="m-bg-banner">
          <div className="text">
            <h5>软件下载</h5>
            <p>各种终端全覆盖，支持手机（苹果、安卓），桌面版等</p>
            <ul className="icons">
              <li><img src={icon3} alt=""/></li>
              <li><img src={icon1} alt=""/></li>
              <li><img src={icon2} alt=""/></li>
            </ul>
          </div>
          <img src={banner} alt=""/>
        </div>
        <div className="mdownload-link">
          <Title>
            <h5>{data} V3.6 </h5>
            <p>晨科软件基于全业务管理平台打造了丰富的通用管理软件和行业产品，软件覆盖研发、生产、仓储、销售、服务、人事、行政、财务等各个业务管理领域，产品广泛应用于制造、贸易、服务、物流、金融、电力、房产、交通、医疗、教育、政府等行业。</p>
          </Title>
          <div className="download-thumb">
            <img src={download} alt="" />
          </div>
          <div className="link-android link">
            <img src={android} alt=""/><span>Android</span>
            <Link to='/'><button className="btn btn-success" type="button">点击下载</button></Link>
          </div>
          <div className="link-IOS link">
            <img src={ios} alt=""/><span>Android</span>
            <Link to='/'><button className="btn btn-dark" type="button">点击下载</button></Link>
          </div>
          <div className="link-Windows link">
            <img src={windows} alt=""/><span>windows</span>
            <Link to='/'><button className="btn btn-info" type="button">点击下载</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Download