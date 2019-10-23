import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import './mfourpoint.scss'

@inject('store')
@observer
class MFourPoint extends Component {
  componentDidMount() {
    this.props.store.AdvIndexApi._getAdvIndex()
  }
  render() {
    const { data, title } = this.props.store.AdvIndexApi
    return (
      <div className="mfourpoint-modules">
        <h5>{title.index_adv_title}</h5>
        <p className="subtitle">{title.index_adv_description}</p>
        <ul>
          {
            data.map((item, index)=> {
              return <li key={index}>{item.title}{item.des} <span>{item.span}</span></li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default MFourPoint