import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import './industry.scss'

import industry1 from '@/images/industry1.png'

@inject('store')
@observer
class Industry extends Component {
  componentDidMount() {
    this.props.store.InstrodutionApi._getInstroductionIndex()
  }
  render() {
    const { data, title } = this.props.store.InstrodutionApi
    return (
      <div className="session-module industry">
        <div className="title">
          <h1>{title}</h1>
          <span className="part-line"></span>
        </div>
        <div className="content">
          <ul>
            {
              data.map((item, index) => {
                return  <li className="blocks" key={index}>
                          <img src={item.thumb}/>
                          <h4>{item.title}</h4>
                        </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Industry