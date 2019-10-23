import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './footer.scss'

class Footer extends Component {
  
  render() {
    const { match } = this.props;
    return (
      <footer>
        <div className="view-960">
          <div className="nav">
            <ul className="navagition">
              <li><NavLink to='/' exact activeClassName='active'>首页</NavLink></li>
              <li><NavLink to='/download' activeClassName='active'>软件下载</NavLink></li>
              <li><NavLink to='/case' activeClassName='active'>客户案列</NavLink></li>
              <li><NavLink to='/contact' activeClassName='active'>联系我们</NavLink></li>
              <li><NavLink to='/about' activeClassName='active'>关于我们</NavLink></li>
            </ul>
          </div>
          <div className="copy">©2015&nbsp;&nbsp;&nbsp;&nbsp;杭州晨科软件技术有限公司 版权所有&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备09081089号-1&nbsp;&nbsp;&nbsp;&nbsp;公安备案号-33010602005139</div>
        </div>
      </footer>
    )
  }
}
export default Footer