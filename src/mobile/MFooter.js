import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './mfooter.scss'

class MFooter extends Component {
  render() {
    return (
      <div className="mfooter-modules">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/">定制服务</Link></li>
          <li><Link to="/">软件下载</Link></li>
          <li><Link to="/">客户案列</Link></li>
          <li><Link to="/">联系我们</Link></li>
          <li><Link to="/">关于我们</Link></li>
        </ul>
        <p>
          ©2015 杭州晨科软件技术有限公司 版权所有<br />
          浙ICP备09081089号-1<br />
          公安备案号-33010602005139<br />
        </p>
      </div>
    )
  }
}
export default MFooter