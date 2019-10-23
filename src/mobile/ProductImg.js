import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import default0 from '@/images/default0.jpg'
import rightbutton from '@/images/right-button.svg'

import './productimg.scss'

@inject('store')
@observer
class ProductImg extends Component {
  componentDidMount() {
    this.props.store.ProductName._getProducts()
  }
  render() {
    const {productsNav, shape} = this.props.store.ProductName;
    console.log(productsNav)
    let content;
    if(shape=='circle') {
      content =   productsNav.map((item,index)=>{
                    return <Link to={`/product/${item.id}`} className="item" key={index}>
                            <img src={item.image} alt="item.image"/>
                            <p>{item.pro_name.replace('系统', '')}</p>
                          </Link>
                  })
    }else {
     content = productsNav.map((item,index)=>{
        let img = item.image?item.image:default0
        return <Link to={`/product/${item.id}`} className="item" style={{backgroundImage:`url(${img})`}} key={index}>
                <div className="maskin"></div>
                <p>{item.pro_name} <img src={rightbutton} alt=""/></p>
              </Link>
      })
    }
    return (
      <div className={`ProductImg-modules ${shape=='circle'?shape:'square'}`} >
        { content }
      </div>
    )
  }
}
export default ProductImg