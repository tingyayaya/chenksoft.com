import React, {Component} from 'react'
import Swiper from 'react-id-swiper'

import banner1 from '@/images/政府单位.png'
import banner2 from '@/images/中小学.png'
import 'react-id-swiper/lib/styles/css/swiper.css'
import './mindustry.scss'
import { inject, observer} from 'mobx-react'

@inject('store')
@observer
class Mindustry extends Component {

  componentDidMount() {
    this.props.store.InstrodutionApi._getInstroductionIndex()
  }
  render() {
    const { title, data } = this.props.store.InstrodutionApi
    const params = {
      slidesPerView: '1.45',
      freeMode: true,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet',
        clickable: false,
      }
    }
    return (
      <div className="mindustry-modules">
        <h5>{title}</h5>
        <Swiper {...params} >
          {
            data.map((item,index)=>{
              return <div className="m-item" key={index}>
                        <i>{item.title}</i>
                        <img src={item.thumb} alt=""/>
                      </div>
            })
          }
        </Swiper>
      </div>
    )
  }
}
export default Mindustry