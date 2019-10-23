import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import "./downloadaddress.scss"

import download from '@/images/download.png'
import windows from '@/images/file_windows.svg'

@inject('store')
@observer
class DownloadAddress extends Component {
  componentDidMount() {
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    const { data } = this.props.store.SysNameApi
    return (
      <div className="session-modules">
        <div className="text">
          <span className="title">晨科{data} v3.6</span>
          <p>晨科软件基于全业务管理平台打造了丰富的通用管理软件和行业产品，软件覆盖研发、生产、仓储、销售、服务、人事、行政、财务等各个业务管理领域，产品广泛应用于制造、贸易、服务、物流、金融、电力、房产、交通、医疗、教育、政府等行业。</p>
          <span>
            版本：3.6 <br/>
            语言：中文简体<br/>
            安装：绿色版（直接解压运行skclient.exe)<br/>
          </span>
          <a href="http://chenk.hopto.org:8088/app/doc/data/skclient.zip"><button className="btn btn-info" type="submit">
            <img src={windows} alt="" className="midwindows"/>
            windows版本下载</button></a>
        </div>
        <img src={download} alt=""/>
      </div>
    )
  }
}
export default DownloadAddress