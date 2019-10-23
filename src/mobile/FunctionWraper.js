import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import icon1 from '@/images/659.png'
import icon2 from '@/images/496.png'

import './functionwraper.scss'

@inject('store')
@observer
class FunctionWraper extends Component {
  
  render() {
    const { pro, data, title } = this.props
    return (
      <div className="functionwraper-modules">
        <h5>{title}</h5>
        <ul className={pro ? "wraper prodcut":'wraper'}>
          {
            data.map((item, index)=> {
              return (
              <li key={index}>
                <i className="icon-wraper">
                  <img src={item.thumb} alt=""/>
                </i>
                <div className="text">
                  <h6>{item.title}</h6>
                  <span>{item.content}</span>
                </div>
              </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default FunctionWraper