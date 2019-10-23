import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import { inject, observer } from 'mobx-react'
import { trace } from 'mobx'
import 'react-id-swiper/lib/styles/css/swiper.css';


import './banner.scss'

@inject('store')
@observer
class Banner extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.store.bannerApi._getBanner()
  }
  render() {
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
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
    const banners = this.props.store.bannerApi.banners
    return (
      <div className="swiper-bannner" >
        <Swiper {...params} >
          {
            banners.map((item, index) => {
              return <div key={index}><div style={{backgroundImage: `url(${item})`}} className="banner-img"></div></div>
            })
          }
        </Swiper>
      </div>
    )
  }
}
export default Banner