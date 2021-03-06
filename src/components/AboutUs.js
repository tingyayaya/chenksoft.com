import React, {Component} from 'react'

import img1 from "@/images/Group.png"
import img2 from "@/images/Group2.png"
import img3 from "@/images/Group3.png"

import './aboutus.scss'
class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="s-header">
          <div className="s-title">关于我们</div>
          <div className="s-subtitle">资深专家队伍，提供本地化专业服务</div>
          <div className="s-subline"></div>
        </div>
        <div className="s-text">
          晨科软件于2008年成立，是国内领先的集软件研发、销售、服务于一体的高新技术企业，总部位于杭州，<br/>
          在上海、北京、深圳、武汉、成都、沈阳等20多个城市设有分支机构。<br/>
          公司员工100多名，其中70%人员具有本科以上学历，研发人员占比60%以上。
        </div>
        <ul className="s-ul">
          <li><img src={img1} alt="" /></li>
          <li><img src={img2} alt="" /></li>
          <li><img src={img3} alt="" /></li>
        </ul>
        <div className="s-content">
          <h4>自主研发 技术创新</h4>
          <p>晨科软件拥有具有完全自主知识产权的晨科全业务管理平台，基于该平台打造了丰富的通用管理软件和行业产品，软件覆盖研发、生产、仓储、销售、服务、人事、行政、财务等各个业务管理领域，产品广泛应用于制造、贸易、服务、物流、金融、电力、房产、交通、医疗、教育、政府等行业。</p>
          <h4>快速开发 敏捷定制</h4>
          <p>晨科软件以先进的平台开发技术为基础，凭借专业的本地化团队和十多年软件开发经验，根据客户个性化需求进行快速开发、敏捷定制，致力于通过“软件产品+定制服务”的业务模式，全方位满足客户需求，为客户的持续发展打造合身的业务系统，提供强有力的信息化支持。</p>
          <h4>开放共赢 构建生态</h4>
          <p>晨科始终坚持“互生、共生、再生”的合作理念，以晨科全业务管理平台为基础，联合生态伙伴开放式创新，构建开放共赢的信息化生态体系。精准把握用户需求和市场动态，围绕客户业务场景，快速提供适配需求的客户化解决方案，帮助客户构筑数字化转型领先优势。</p>
        </div>
      </div>
    )
  }
}
export default AboutUs