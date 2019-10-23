import React, {Component} from 'react'
import banner from '@/images/ba_case.jpg'
import Title from './Title'
import CustomLogo from './CustomLogo'
import './mcase.scss'
import round from '@/images/小圆点.svg'
import COMPANY from '@/data/company'

class MCase extends Component {
  render() {
    return (
      <div className="MCase-modules">
        <div className="m-bg-banner">
          <div className="text">
            <h5>客户案例</h5>
            <ul className="list">
              <li>电子</li>
              <li>金融</li>
              <li>制造</li>
              <li>房地产</li>
              <li>教育</li>
              <li>IT服务</li>
              <li>服装</li>
              <li>管理咨询</li>
              <li>医药</li>
              <li>政府机构</li>
              <li>物流</li>
              <li>汽车</li>
            </ul>
          </div> 
          <img src={banner} alt=""/>
        </div>
        <div className="MCase-logo">
          <Title>
            <h5>我们的客户</h5>
            <p>五千多成功客户案例，值得用户信赖</p>
          </Title>
          <CustomLogo />
        </div>
        <div className="MCase-content">
          <ul className="layer1">
            {
              COMPANY.original.map(function(item, index) {
                return  <li key={index}>
                          <div className="title"><img src={round} alt=""/> <span>{item.name}</span></div>
                          <ul  className="layer2">
                            { item.company.map(function(item1,index1) {
                              return <li key={index1}>{item1}</li>
                                    
                            })}
                          </ul>
                        </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default MCase