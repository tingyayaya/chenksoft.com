import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import file from '@/images/file_file2.svg'
import './products.scss'
import img1 from '@/images/Image1.png'
import img2 from '@/images/img2.png'

@inject('store')
@observer
class Products extends Component {
  componentDidMount() {
    this.props.store.ProductName._getProducts()
  }
  render() {
    const {productsNav, shape} = this.props.store.ProductName
    return (
      <div className="product-modules">
        {/* <div className="header">
          <h1>丰富的产品线，全领域覆盖</h1>
          <span className="part-line"></span>
        </div> */}
        <ul className={shape}>
          { productsNav.map((item, index)=> {
            return (
              <Link to={`/product/${item.id}`} key={index}  className={`product-item ${item.shape}`}>
                <li>
                  <img src={item.image} alt=""/>
                  <div className="maskin"></div>
                  <div className="title">
                    <h5>{item.pro_name}</h5>
                  </div>
                  <div className="view-btn">
                    <img src={file} alt=""/>
                  </div>
                </li>
              </Link>
            )
          }) }
        </ul>
      </div>
    )
  }
}
export default Products