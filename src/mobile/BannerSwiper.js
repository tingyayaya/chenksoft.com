import React, {Component} from 'react'
import Swiper from 'react-id-swiper'

import banner1 from '@/images/m-banner1.jpg'
import banner2 from '@/images/m-banner2.jpg'
import 'react-id-swiper/lib/styles/css/swiper.css';


import './bannerswiper.scss'
import { inject, observer } from 'mobx-react';
@inject('store')

@observer
class BannerSwiper extends Component {
  componentDidMount() {
    this.props.store.MobileBannerApi._getMobileBanner()
  }
  render() {
    const { data } = this.props.store.MobileBannerApi
    console.log(data)
    const params = {
      loop: true,
      autoplay:true,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper 
      observeParents:false,//修改swiper的父元素时，自动初始化swiper 
      onSlideChangeEnd: function(swiper){ 
  　　　  swiper.update();  
  　　　  mySwiper.startAutoplay();
  　　    mySwiper.reLoop();  
      },
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet',
        clickable: false,
      },
      spaceBetween: 30
    }
    return (
      <div className="m-banner">
        <Swiper {...params} >
          {
            data.map((item, index)=>{
              return  <div className="m-item" key={index}>
                        <div className="banner-text">
                          <h4 className="title">{item.title}</h4>
                          <p className="subtitle">{item.subtitle}</p>
                          {item.content?<span className="desc">{item.content}</span>:''}
                        </div>
                        <div style={{backgroundImage: `url(${item.banner})`, backgroundRepeat: 'no-repeat'}} className="m-banner-img"></div>
                      </div>
            })
          }
        </Swiper>
      </div>
    )
  }
}
export default BannerSwiper