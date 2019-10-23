import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import number1 from '@/images/n1.png'
import number2 from '@/images/n2.png'
import number3 from '@/images/n3.png'
import number4 from '@/images/n4.png'

import './fourpoint.scss'

@inject('store')
@observer
class FourPoint extends Component {
  static defaultProps = {
    store : {
      AdvIndexApi: {
        data: [{title:'1'}],
        title: {
          index_adv_title: '我只不是标题， 我只是占位符',
          index_adv_description: '我只不是描述， 我只是占位符'
        }
      }
    }
  }
  componentDidMount() {
    this.props.store.AdvIndexApi._getAdvIndex()
  }
  render() {
    const { data, title } = this.props.store.AdvIndexApi
    return (
      <div className="session-module fourpoint">
        <div className="title">
          <h2>{title.index_adv_title}</h2>
          <p>{title.index_adv_description}</p>
        </div>
        <div className="content">
          <ul>
              <li className="blocks">
                <img src={number1} />
                <div className="text">
                  <h4>{data[0]&&data[0].title}</h4>
                  <p>{data[0]&&data[0].des}<span>{data[0]&&data[0].span}</span></p>
                </div>
              </li>
              <li className="blocks">
                <img src={number2} />
                <div className="text">
                  <h4>{data[1]&&data[1].title}</h4>
                  <p>{data[1]&&data[1].des}<span>{data[1]&&data[1].span}</span></p>
                </div>
              </li>
              <li className="blocks">
                <img src={number3} />
                <div className="text">
                  <h4>{data[2]&&data[2].title}</h4>
                  <p>{data[2]&&data[2].des}<span>{data[2]&&data[2].span}</span></p>
                </div>
              </li>
              <li className="blocks">
                <img src={number4} />
                <div className="text">
                  <h4>{data[3]&&data[3].title}</h4>
                  <p>{data[3]&&data[3].des}<span>{data[3]&&data[3].span}</span></p>
                </div>
              </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default FourPoint