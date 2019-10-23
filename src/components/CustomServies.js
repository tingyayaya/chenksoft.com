import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

import thumbnail01 from '@/images/custom-01.jpg'
import thumbnail02 from '@/images/custom-02.jpg'
import thumbnail03 from '@/images/custom-03.jpg'
import demand from '@/images/custom-demand.svg'
import speediness from '@/images/custom-speediness.svg'
import stabilization from '@/images/custom-stabiliazation.svg'
import contact from '@/images/custom-contact.png'
import judge from '@/images/custom-judge.png'
import online from '@/images/custom-online.png'
import develop from '@/images/custom-develop.png'
import set from '@/images/custom-set.png'
import research from '@/images/custom-research.png'
import project from '@/images/custom-project.png'
import test from '@/images/custom-test.png'
import dingzhi03 from '@/images/dingzhi03.png'

import './customservies.scss'

@inject('store')
@observer
class CustomServies extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    const sysname = this.props.store.SysNameApi.data
    return (
      <div className="custom-moudles">
        <div className="blocks-bg">
          <div className="headerLine">
            <h2>基于产品的个性化开发服务</h2>
            <p>基于现有的{sysname}，以及对该业务领域的深刻理解，我们提供专业的个性化开发服务，全方位满足您的业务需求<br />
            二次开发也是平衡共性需求与个性需求的最佳方案
            </p>
          </div>
          <div className="content">
            <div className="wrapper">
              <div className="thumbnail">
                <img src={thumbnail01} alt=""/>
              </div>
              <div className="text">
                <div className="title">按需定制</div>
                <div className="desc">当通用性产品无法满足用户的个性化需求时，二次开发是平衡通用软件与定制软件，共性需求与个性需求的最佳方案。</div>
              </div>
              <div className="tail">
                <img src={demand} alt=""/>
                <span>DEMAND</span>
              </div>
            </div>
            <div className="wrapper">
              <div className="thumbnail">
                <img src={thumbnail02} alt=""/>
              </div>
              <div className="text">
                <div className="title">快速响应</div>
                <div className="desc">基于平台和产品的定制开发，能快速响应客户个性化需求，最大限度的缩短开发周期，有效降低开发成本，提高客户满意度。</div>
              </div>
              <div className="tail">
                <img src={speediness} alt=""/>
                <span>SPEEDINESS</span>
              </div>
            </div>
            <div className="wrapper">
              <div className="thumbnail">
                <img src={thumbnail03} alt=""/>
              </div>
              <div className="text">
                <div className="title">稳定可靠</div>
                <div className="desc">晨科专注于组织信息化建设，在个性化开发上积累了丰富的开发经验和团队建设经验，拥有一套成熟的定制解决方案。</div>
              </div>
              <div className="tail">
                <img src={stabilization} alt=""/>
                <span>STABILIZATION</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-bg">
          <div className="headerLine">
            <h2>专业定制流程</h2>
            <p>依托晨科全业务管理平台，基于现有的成熟产品，快速响应您的软件定制需求，为您业务的信息化建设，提供强有力保障</p>
          </div>
          <ul className="content flow">
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
        <div className="blocks-bg">
          <div className="headerLine">
            <h2>细致服务、专业团队、最佳定制体验</h2>
          </div>
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
export default CustomServies