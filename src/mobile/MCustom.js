import React, {Component} from 'react'
import Loadable from '@/utils/loadable'
import { Link } from 'react-router-dom'

import './mcustom.scss'

const CustomLogo = Loadable(() => import('@/mobile/CustomLogo'))

class MCustom extends Component {
  render() {
    return (
      <div className="mcustom-modules">
        <h5>我们的客户</h5>
        <CustomLogo len="8"/>
        <Link to="/case" className="m-button">查看更多</Link>
      </div>
    )
  }
}
export default MCustom