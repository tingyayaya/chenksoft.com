import React, {Component} from 'react'

import './smartarchive.scss'
import img1 from '../images/智慧档案室1.jpg'
import img2 from '../images/智慧档案室2.png'
import img3 from '../images/智慧档案室3.png'
import img4 from '../images/智慧档案室4.png'
import img5 from '../images/智慧档案室5.png'
import img6 from '../images/智慧档案室6.png'
import img7 from '../images/智慧档案室7.png'

class SmartArchive extends Component {
  render() {
    const classname = this.props.mobile?'mobile':'';
    return (
      <div className={`smartarchive-moudles ${classname}`}>
        <div className="title">
          <h5>智慧档案室系统整体架构</h5>
          <span className="part-line"></span>
        </div>
        <div className="session-module title-img">
          <img src={img1} alt=""/>
        </div>
        <div className="background-gray session-module">
          <img src={img2} alt=""/>
          <div className="text">
            <h5>档案柜相关设备</h5>
            <p>
            1、智能档案柜<br />
            2、智能回转柜<br />
            3、智能密集架<br />
            </p>
          </div>
        </div>
        <div className="session-module">
          <div className="text">
            <h5>服务器相关设备</h5>
            <p>
            1、塔式服务器<br />
            2、磁盘阵列<br />
            3、存储设备<br />
            4、存储硬盘<br />
            </p>
          </div>
          <img src={img3} alt=""/>
        </div>
        <div className="background-gray session-module">
          <img src={img4} alt=""/>
          <div className="text">
            <h5>安全防盗相关设备</h5>
            <p>
            1、通道门<br />
            2、门禁<br />
            </p>
          </div>
        </div>
        <div className="session-module">
          <div className="text">
            <h5>档案自助终端</h5>
          </div>
          <img src={img5} alt=""/>
        </div>
        <div className="background-gray session-module">
          <img src={img6} alt=""/>
          <div className="text">
            <h5>环境相关设备</h5>
            <p>
            1、网络型温湿度传感器<br />
            2、智能空调控制器<br />
            3、恒湿净化一体机<br />
            4、二氧化碳探测器<br />
            5、臭氧发生器<br />
            6、摄像头<br />
            </p>
          </div>
        </div>
        <div className="session-module border-bottom-10">
          <div className="text">
            <h5>RFID工作台相关设备</h5>
            <p>
            1、RFID标签打印机<br />
            2、RFID手持机PDA<br />
            3、RFID读写器<br />
            </p>
          </div>
          <img src={img7} alt=""/>
        </div>
      </div>
    )
  }
}
export default SmartArchive