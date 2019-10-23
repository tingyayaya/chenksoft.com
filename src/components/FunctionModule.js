import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import './functionmodule.scss'

@inject('store')
@observer
class FunctionModule extends Component {
  componentDidMount() {
    this.props.store.FuncIndexApi._getFuncIndex()
  }
  render() {
    const { title, data }= this.props.store.FuncIndexApi
    return (
      <div className="session-module  background-gray500 function-module-b">
        <div className="title">
          <h1>{title}</h1>
          <span className="part-line"></span>
        </div>
        <div className="content">
          <ul>
            {
              data.map((item, index) => {
                return  <FunctionModuleItem  key={index} item={item}/>
              })
            }
           
          </ul>
        </div>
      </div>
    )
  }
}

class FunctionModuleItem extends Component {
  render() {
    const item = this.props.item
    return (
      <li className="function-module blocks">
        <div className="thumbnail">
          <img src={item.thumb} alt=""/>
        </div>
        <div className="text">
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      </li>
    )
  }
}
export default FunctionModule