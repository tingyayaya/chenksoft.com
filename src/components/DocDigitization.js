import React, {Component} from 'react'
import './docdigitization.scss'

class DocDigitization extends Component {
  render() {
    return (
      <div className="digitization-moudles">
        <div className="advantages-moudles">
          <div className="title">
            <h1>文档数字化优势</h1>
            <span>安全、准确、完整；实现纸质档案数据化，有效保护原件</span>
          </div>
          <ul className="list">
            <li>
              <i className="w-icon w-icon-pages"></i>
              <div className="text">
                <h5>纸质文件容易损坏，维护管理极为困难</h5>
                <p>企业的日常运作中，存在大量的纸质文件，比如标书、来往传真、报价单、合同、表格、审批签字文件等等。这些纸质文件承载企业重要信息，同时也带来了大量管理问题。体积庞大，不便于存储、检索与查询。纸质文件容易受损，难以长时间保存；出现灾难难以恢复。传递速度慢，效率低（如传真）。安全性差，容易被复制、窃取且难以追踪</p>
              </div>
            </li>
            <li>
              <i className="w-icon w-icon-digitization"></i>
              <div className="text">
                <h5>电子化，规范化，一劳永逸，一举多得</h5>
                <p>文档数字化是晨科软件的服务内容之一，是指采用扫描仪或数码相机等数码设备对纸质文档进行数字化加工，将其转化为能被计算机识别的数字图像或数字文本的处理过程。使文档检索快捷方便、容易实时同步备份、存储空间小，维护方便、安全</p>
              </div>
            </li>
            <li>
              <i className="w-icon w-icon-officework"></i>
              <div className="text">
                <h5>完整的解决方案，实现无纸化办公</h5>
                <p>晨科为客户提供完整的文件电子化解决方案，包括扫描、识别、归档等，帮助用户将纸质文件转换为电子文档。支持标准接口的扫描仪，OCR /2D条形码识别。通过晨科电子文档管理平台，可以方便地实现查询、审批、协作、安全管控。帮助用户实现将线下业务转移到线上，真正实现无纸化办公，降低文档管理工作轻度，提高工作效率</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="process-moudles">
          <div className="title">
            <h1>加工流程</h1>
            <span>高效、管理科学的档案数字化加工生产线</span>
          </div>
          <ul className="list">
            <li>
              <i className="w-icon w-icon-flowchart-1"></i>
              <div className="text">
                <h6>文档接收</h6>
                <p>文档接收是数字化加工路程的第一步，需要确保文档数目无误，文档实体安全，接收时对档案资料进行详细登记</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>文档整理</h6>
                <p>在扫描之前，根据文档管理情况，对文档进行适当整理，并是需要做出标识，确保档案数字化质量</p>
              </div>
              <i className="w-icon w-icon-flowchart-2"></i>
            </li>
            <li>
              <i className="w-icon w-icon-flowchart-3"></i>
              <div className="text">
                <h6>目录建库</h6>
                <p>按照《档案著录规则》的要求进行著录，简历文档目录数据库。并采用人工或软件校对方式，对目录数据库的建库质量进行检查。核对著录项目完整性，著录内容规范性，不符合要求进行修改或重录</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>文档扫描</h6>
                <p>文档扫描是将纸质文当转变为电子文件的过程，导入档案目录之后生成计算机磁盘树形目录结果，再扫描文档。填写《扫描登记表》，记录扫描文档的数量，页数等详细信息</p>
              </div>
              <i className="w-icon w-icon-flowchart-4"></i>
            </li>
            <li>
              <i className="w-icon w-icon-flowchart-5"></i>
              <div className="text">
                <h6>图像处理</h6>
                <p>对图像进行处理，以获得最好的图像质量，保证图像完整、端正、无扭曲、版面无暗影、无干扰信息主要处理包括：去黑边，去五点，纠偏等处理完的图像保存为PD</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>图像质检</h6>
                <p>主要对完成图像深处理的检查，图像不完整或无法清晰识别，图像偏斜不符合质量要求，图像极处理不得当应当重新扫描重新处理；对图像页码和顺序进行检查，是否遗漏、多扫、顺序错乱，并进行处理</p>
              </div>
              <i className="w-icon w-icon-flowchart-6"></i>
            </li>
            <li>
              <i className="w-icon w-icon-flowchart-7"></i>
              <div className="text">
                <h6>数据质检</h6>
                <p>检查每个目录下的扫描文件，打开是否正常页数是否正确，目录和扫描文件是否一致。检查影像文件倾斜度，清晰度，整洁度，分辨率和格式等，检查文件是否有崇业，缺页，漏页，信息不完整等情况</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>数据验收</h6>
                <p>数字化质量抽检合格率打到95%及以上时，通过验收。目录数据库与图像文件瓜姐错误，或目录数据库、图像文件之一出现不完整、不清晰、有错误等质量问题，抽检不合格</p>
              </div>
              <i className="w-icon w-icon-flowchart-8"></i>
            </li>
            <li>
              <i className="w-icon w-icon-flowchart-9"></i>
              <div className="text">
                <h6>装订归还</h6>
                <p>数据化工作完成后，拆除过装订物文档赢按保管要求重新装订。保持顺序不变，做到安全、准确、无遗漏文档装订完成后，提交给客户填写《档案交接登录表》由客户签字，永久备案</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>数据备份</h6>
                <p>经过验收合格的完整数据应及时进行备份。备份不同阶段数据，扫描后备份，质检后备份。全部数据刻录为DVD光盘备份，并在计算机硬盘进行备份</p>
              </div>
              <i className="w-icon w-icon-flowchart-10"></i>
            </li>
            <li>
              <i className="w-icon w-icon-flowchart-11"></i>
              <div className="text">
                <h6>数据挂接</h6>
                <p>将挂在数据上传录入到晨科电子文档管理系统服务器上，并在系统中对文档进行检查</p>
              </div>
            </li>
            <li>
              <div className="text">
                <h6>成果检查</h6>
                <p>由客户对文档数据化加工成果进行最终体验</p>
              </div>
              <i className="w-icon w-icon-flowchart-12"></i>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default DocDigitization