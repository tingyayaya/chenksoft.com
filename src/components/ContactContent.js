import React, {Component} from 'react'

import { AREA } from '@/data/contactUs'

import "./contactcontent.scss"

class ContactContent extends Component {
  render() {
    return (
      <div className="contact-content">
        <div className="contact-title">
          <p>联系我们</p>
          <span>资深专家队伍，提供本地化专业服务</span>
        </div>
        <div className="table-contact">
          {
            AREA.map((item, index)=>{
              return (
                <div className="s-ul-1" key={index}>
                  <div className="title">
                    <span>{item.area}</span>
                  </div>
                  <div className="list">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>城市</th>
                          <th>地址</th>
                          <th>电话</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          item.list.map((item2, index2)=>{
                            return <tr key={index2}>
                                    <td>{item2.city}</td>
                                    <td>{item2.address}</td>
                                    <td>{item2.tel}</td>
                                  </tr>
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default ContactContent