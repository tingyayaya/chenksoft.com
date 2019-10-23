import React, {Component, useState} from 'react'
import Swiper from 'react-id-swiper'

import 'react-id-swiper/lib/styles/css/swiper.css';
import './caselogo.scss'

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

class CaseLogo extends Component {
  
  render() {
    const params = {
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        color: '#fff'
      },
      spaceBetween: 30,
      loop: true
    }
    
    return (
      <div className="swiper">
        <div className="s-header">
          <div className="s-title">我们的客户</div>
          <div className="s-subtitle">五千多成功客户案例，值得用户信赖</div>
        </div>
        <div>
        <Swiper {...params} >
          <div className="s-ul">
            <div className="item">
              <img src={logo1} alt="" />
              <p>《财富》世界500强，全球能源公司250强，国有重要骨干企业，中央直接管理的国有特大型央企</p>
            </div>
            <div className="item">
              <img src={logo2} alt=""  />
              <p>《财富》中国500强，2018中国品牌价值百强榜第95位，中央直接管辖的国有独资公司，三大国有大型骨干航空企业之一</p></div>
            <div className="item">
              <img src={logo3} alt="" />
              <p>综合型公益性海洋研究机构，隶属于自然资源部，拥有一个国家重点实验室，4个自然资源部重点实验室</p>
            </div>
            <div className="item">
              <img src={logo4} alt="" />
              <p>中国制造企业500强，中国医药企业100强，浙江省医药企业中企业规模位列第一位</p>
            </div>
            <div className="item">
              <img src={logo5} alt="" />
              <p>国家“211工程”、“985工程优势学科创新平台”重点建设，国家“双一流”世界一流学科建设高校</p></div>
            <div className="item">
              <img src={logo6} alt="" />
              <p>福布斯（Forbes）2010年中国最具潜力中小企业100强，国家火炬计划重点高新技术企业、中国软件业务收入前百家企业</p>
            </div>
          </div>
          <div className=" s-ul">
                <div className="item"> <img src={logo7} alt="" />
                  <p>时代影响力·中国商业案例TOP30，在《Nature》和《Science》等国际一流的杂志上发表多篇论文</p>
                </div>
                <div className="item"> <img src={logo8} alt="" />
                  <p>《财富》世界500强，2018世界品牌500强，全球225家最大承包商”排名第2位，特大型建筑中央企业</p>
                </div>
                <div className="item"> <img src={logo9} alt="" />
                  <p>国家“211工程”、“985工程优势学科创新平台”重点建设高校，国家首批世界一流学科建设高校</p>
                </div>
                
                <div className="item"> <img src={logo10} alt="" />
                  <p>中国目前规模最大、实力最强的国家级综合性传媒集团，国家级综合性传媒集团</p>
                </div>
                <div className="item"> <img src={logo11} alt="" />
                  <p>《财富》世界500强，国家独资设立的国有公司、国家授权投资的机构和国家控股公司</p>
                </div>
                <div className="item"> <img src={logo12} alt="" />
                  <p>“211工程”、“985工程”、“世界一流大学和一流学科”，是一所综合性全国重点大学，曾被英国著名学者李约瑟称誉为“东方剑桥”</p>
                </div>
                
              </div>
          <div className=" s-ul">
            <div className="item"> <img src={logo13} alt="" />
              <p>中国民营500强企业，中国最大的千家企业集团之一，旗下组建了置业集团、商业集团、家居集团、工业集团四大产业集团</p>
            </div>
            <div className="item"> <img src={logo14} alt="" />
              <p>《财富》中国500强，连续10年中国消费电子领先品牌10强，中国大陆创新企业百强，“全国五一劳动奖状”</p>
            </div>
            <div className="item"> <img src={logo15} alt="" />
              <p>全国模范劳动关系和谐企业，中国国家铁路集团有限公司管理的大型铁路运输企业的18个局之一</p>
            </div>
            <div className="item"> <img src={logo16} alt="" />
              <p>全球领先制药公司，全球总部位于英国伦敦，业务遍布全球100多个国家，公司在17个国家设立生产基地</p>
            </div>
            <div className="item"> <img src={logo17} alt="" />
              <p>国家级重点高新技术企业，中国制药百强企业，国家重点高新技术企业，浙江省AAA级企业</p>
            </div>
            <div className="item"> <img src={logo18} alt="" />
              <p>全球前1000家银行，《亚洲银行家》杂志评为“中国最佳城市零售银行”，2018中国品牌价值百强</p>
            </div>
          </div>
          <div className=" s-ul">
            <div className="item"> <img src={logo19} alt="" />
              <p>二更集团，拥有传媒、教育、影业、文创、云平台等五大事业群</p>
            </div>
            <div className="item"> <img src={logo20} alt="" />
              <p>2016中国企业500强，设有国家级企业技术中心和国家级工业设计中心，累计申请专利5700多项</p>
            </div>
            
            <div className="item"> <img src={logo21} alt="" />
              <p>国家“2011计划”首批牵头高校，教育部首批“卓越工程师教育培养计划”、“卓越教师培养计划”、“新工科研究与实践项目”实施高校</p>
            </div>
            <div className="item"> <img src={logo22} alt="" />
              <p>国家商务部首批认定的中国十大餐饮品 牌企业，是目前杭城最具知名度 的餐饮企业之一。</p>
            </div>
            <div className="item"> <img src={logo23} alt="" />
              <p>中央企业、国有大型重要骨干企业，国家授权投资机构的试点单位</p>
            </div>
            <div className="item"> <img src={logo24} alt="" />
              <p>国家首批“双一流”世界一流学科建设高校、浙江省首批重点建设高校，浙江省、教育部、宁波市共建高校，国家海洋局与宁波市共建高校</p>
            </div>
          </div>
        </Swiper>
        </div>
       
      </div>
      
    )
  }
}
export default CaseLogo