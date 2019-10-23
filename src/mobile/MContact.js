import React, {Component} from 'react'
import banner from '@/images/ba_contact.jpg'
import icon1 from '@/images/hotline-white.svg'
import { AREA } from '@/data/contactUs'

import './mcontact.scss'

class MContact extends Component {
  render() {
    return (
      <div className="MContact-modules">
        <div className="m-bg-banner">
          <div className="text">
            <h5>联系我们</h5>
            <p>资深专家队伍，提供本地化专业服务</p>
            <ul className="icons">
              <li><img src={icon1} alt=""/></li>
            </ul>
            <span className="hotline">400-6990-220</span>
          </div>
          <img src={banner} alt=""/>
        </div>
        <div className="mcontact-cotent">
          <ul>
            {
              AREA.map((item, index)=>{
                return (
                  <li key={ index }>
                    <h5>{item.area}</h5>
                    <TableAddress address={item}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default MContact


class TableAddress extends Component {
  render() {
    const { address } = this.props
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>城市</th><th>地址</th>
          </tr>
        </thead>
        <tbody>
          {
            address.list.map((item2, index2)=>{
              return <tr key={index2}>
                      <td>{item2.city}</td>
                      <td>{item2.address}</td>
                    </tr>
            })
          }
        </tbody>
      </table>
    )
  }
}