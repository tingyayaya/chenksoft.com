import React, {Component} from 'react'

import './customlogo.scss'

import logo1 from '@/images/中国石油.png'
import logo2 from '@/images/中国东方航空.png'
import logo3 from '@/images/还有二所.png'
import logo4 from '@/images/华东医药.png'
import logo5 from '@/images/中国地质大学.png'
import logo6 from '@/images/银江.png'
import logo7 from '@/images/华大基因.png'
import logo8 from '@/images/中国铁建.png'
import logo9 from '@/images/华东理工.png'
import logo10 from '@/images/浙江.png'
import logo11 from '@/images/中石化.png'
import logo12 from '@/images/浙江大学.png'
import logo13 from '@/images/月星.png'
import logo14 from '@/images/boe.png'
import logo15 from '@/images/上海.png'
import logo16 from '@/images/阿斯.png'
import logo17 from '@/images/京.png'
import logo18 from '@/images/bank.png'
import logo19 from '@/images/二更.png'
import logo20 from '@/images/创维.png'
import logo21 from '@/images/知味观.png'
import logo22 from '@/images/工业大学.png'
import logo23 from '@/images/中储粮.png'
import logo24 from '@/images/宁波大学.png'

class CustomLogo extends Component {
  constructor() {
    super()
    this.state = {
      len: 8
    }
  }
  render() {
    const { len } = this.props;
    let list;
    if(len==8) {
      list= <ul className="customlogo-modules">
              <li style={{backgroundImage: `url(${logo1})`}}></li>
              <li style={{backgroundImage: `url(${logo2})`}}></li>
              <li style={{backgroundImage: `url(${logo4})`}}></li>
              <li style={{backgroundImage: `url(${logo5})`}}></li>
              <li style={{backgroundImage: `url(${logo6})`}}></li>
              <li style={{backgroundImage: `url(${logo7})`}}></li>
              <li style={{backgroundImage: `url(${logo8})`}}></li>
              <li style={{backgroundImage: `url(${logo9})`}}></li>
            </ul>
    }else {
      list = <ul className="customlogo-modules">
              <li style={{backgroundImage: `url(${logo1})`}}></li>
              <li style={{backgroundImage: `url(${logo2})`}}></li>
              <li style={{backgroundImage: `url(${logo4})`}}></li>
              <li style={{backgroundImage: `url(${logo5})`}}></li>
              <li style={{backgroundImage: `url(${logo6})`}}></li>
              <li style={{backgroundImage: `url(${logo7})`}}></li>
              <li style={{backgroundImage: `url(${logo8})`}}></li>
              <li style={{backgroundImage: `url(${logo9})`}}></li>
              <li style={{backgroundImage: `url(${logo10})`}}></li>
              <li style={{backgroundImage: `url(${logo11})`}}></li>
              <li style={{backgroundImage: `url(${logo12})`}}></li>
              <li style={{backgroundImage: `url(${logo13})`}}></li>
              <li style={{backgroundImage: `url(${logo14})`}}></li>
              <li style={{backgroundImage: `url(${logo15})`}}></li>
              <li style={{backgroundImage: `url(${logo16})`}}></li>
              <li style={{backgroundImage: `url(${logo17})`}}></li>
              <li style={{backgroundImage: `url(${logo18})`}}></li>
              <li style={{backgroundImage: `url(${logo20})`}}></li>
              <li style={{backgroundImage: `url(${logo21})`}}></li>
              <li style={{backgroundImage: `url(${logo22})`}}></li>
              <li style={{backgroundImage: `url(${logo23})`}}></li>
              <li style={{backgroundImage: `url(${logo24})`}}></li>
            </ul>
    }
    return (list)
  }
}
export default CustomLogo