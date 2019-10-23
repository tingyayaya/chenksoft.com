import React, {Component} from 'react'
import Title from './Title'

import banner from '@/images/ba_service.jpg'
import icon3 from '@/images/custom-stabiliazation-white.svg'
import icon2 from '@/images/custom-speediness-white.svg'
import icon1 from '@/images/custom-demand-white.svg'

import custom1 from '@/images/custom-01.jpg'
import custom3 from '@/images/custom-03.jpg'
import custom2 from '@/images/custom-02.jpg'

import contact from '@/images/custom-contact.png'
import judge from '@/images/custom-judge.png'
import online from '@/images/custom-online.png'
import develop from '@/images/custom-develop.png'
import set from '@/images/custom-set.png'
import research from '@/images/custom-research.png'
import project from '@/images/custom-project.png'
import test from '@/images/custom-test.png'
import dingzhi03 from '@/images/dingzhi03.png'

import './mservice.scss'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class MService extends Component {
  componentDidMount() {
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    const { data } = this.props.store.SysNameApi
    return (
      <div className="mservice-modules">
        <div className="m-bg-banner">
          <div className="text">
            <h5>了解我们的定制服务</h5>
            <p>为您提供专业的个性化开发服务，祝您业务飞跃发展</p>
            <ul className="icons">
              <li><img src={icon1} alt=""/></li>
              <li><img src={icon2} alt=""/></li>
              <li><img src={icon3} alt=""/></li>
            </ul>
          </div>
          <img src={banner} alt=""/>
        </div>
        <div className="mservice-character">
          <Title>
            <h5>基于产品的个性化开发服务</h5>
            <p>基于现有的{data}，以及对该业务领域的深刻理解，我们提供专业的个性化开发服务，全方位满足您的业务需求<br />二次开发也是平衡共性需求与个性需求的最佳方案</p>
          </Title>
          <ul className="content">
            <li>
              <div className="text">
                <h6>按需定制</h6>
                <p>每一款软件的定制开发都要经过细致的系统分析，针对每个用户的实际情况，量身最适用的应用，打造属于最适合自己的管理软件</p>
              </div>
              <img src={custom1} alt=""/>
            </li>
            <li>
              <div className="text">
                <h6>快速响应</h6>
                <p>软件定制开发根据用户实际业务情况，编制所需的功能模块，删除没有实际使用价值的功能，最大限度的缩短开发周期</p>
              </div>
              <img src={custom2} alt=""/>
            </li>
            <li>
             <div className="text">
                <h6>稳定可靠</h6>
                <p>十年业务沉淀，基于自主定制开发平台。团队开发经验和成熟的企业软件定制开发解决方案，提供更稳定可靠的服务</p>
              </div>
              <img src={custom3} alt=""/>
            </li>
          </ul>
        </div>
        <div className="mservice-flow">
          <Title>
            <h5>专业定制流程</h5>
            <p>依托晨科全业务管理平台，快速响应您的软件定制需求，为您业务的信息化建设，提供强有力保障</p>
          </Title>
          <ul className="content">
            <li>
              <img src={contact} alt=""/>
              <p>需求沟通</p>
            </li>
            <li>
              <img src={judge} alt=""/>
              <p>方案确立</p>
            </li>
            <li>
              <img src={project} alt=""/>
              <p>项目立项</p>
            </li>
            <li>
              <img src={research} alt=""/>
              <p>项目调研</p>
            </li>
            <li>
              <img src={develop} alt=""/>
              <p>软件开发</p>
            </li>
            <li>
              <img src={test} alt=""/>
              <p>测试试用</p>
            </li>
            <li>
              <img src={online} alt=""/>
              <p>正式上线</p>
            </li>
            <li>
              <img src={set} alt=""/>
              <p>系统维护</p>
            </li>
          </ul>
        </div>
        <div className="mservice-teamwork">
          <Title>
            <h5>细致服务、专业团队、最佳定制体验</h5>
          </Title>
          <div className="content">
            <img src={dingzhi03} alt=""/>
            <ul className="list">
              <li>
                <div className="title"><span className="blue">01</span>领先技术，产品上线，快人一步</div>
                <p className="desc">设计、开发、测试、部署、维护环环相扣，线上项目管理系统实时查看项目进度，按天计算工期，有效节约双方沟通成本，加快项目推进速度。</p>
              </li>
              <li>
                <div className="title"><span className="blue">02</span>产品经理+项目经理全程一对一跟进</div>
                <p className="desc">专业技术团队秉承“客户至上、精益求精”的理念，严格把控项目质量和开发周期，分工细致，全方位满足客户需求，提供最优质的定制体验。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MService