import React, {Component} from 'react'

import './ServiceProcess.scss'
import arrowPic from '@/images/5000002261.png'

class ServiceProcess extends Component {
  render() {
    return (
      <div className='service-process-moudles'>
        <div className="title">
          <h2>项目实施流程</h2>
          <span>一切以用户价值为核心，重视与用户的沟通，注重长远发展，与用户共同成长</span>
        </div>
        <div className="content">
          <ul>
            <li className="step step1">
              <h6>STEP.1</h6>
              <div className="round round1">沟通</div>
              <p>前期需求沟通，演示系统，收集个性化需求<br/>编制并确认前期项目开发实施方案</p>
            </li>
            <li className="step step2">
              <h6>STEP.2</h6>
              <div className="round round2">洽谈</div>
              <p>调研收集需求<br/>商务洽谈签订合同</p>
            </li>
            <li className="step step3">
              <h6>STEP.3</h6>
              <div className="round round3">调研</div>
              <p>调研收集需求<br/>
编制并确认正式项目<br/>
开发实施方案</p>
            </li>
            <li className="step step4">
              <h6>STEP.4</h6>
              <div className="round round4">开发</div>
              <p>系统开发<br/>调试、测试</p>
            </li>
            <li className="step step5">
              <h6>STEP.5</h6>
              <div className="round round5">部署</div>
              <p>实施部署试运行环境<br/>
组织初培，进入验收试运行阶段</p>
            </li>
            <li className="step step6">
              <h6>STEP.6</h6>
              <div className="round round6">正式</div>
              <p>正式上线，组织培训<br/>
初始化基础数据、历史业务数据<br/>
进入系统售后服务流程</p>
            </li>
          </ul>
          <img src={arrowPic} alt=""/>
        </div>
      </div>
    )
  }
}
export default ServiceProcess