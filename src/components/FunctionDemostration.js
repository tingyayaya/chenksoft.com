import React, {Component} from 'react'
import axios from 'axios'
import $ from 'jquery'

import TavSwitch from '@/components/TabSwitch'

import errorImg from '@/images/errorimg.png'
import loading from '@/images/file_loading.svg'
import './functiondemostration.scss'

class FunctionDemoStration extends Component {
  constructor() {
    super()
    this.state={
      tab: 0
    }
  }
  handleChangeTab(index) {
    this.setState({
      tab: index
    })
  }
  render() {
    return (
      <div className="function-demo">
        <div className="ai-module-header">功能演示</div>
        <TavSwitch className="ai-doule-tab" handleChangeTab={this.handleChangeTab.bind(this)}>
          <li  className="ai-doule-tab-item-active">通用识别</li>
          <li className="ai-doule-tab-item-active">人脸识别</li>
        </TavSwitch>
        <TechImgContent tab={this.state.tab}/>
      </div>
    )
  }
}

const text = {
	"log_id": "38087904779944264593808790477994426459",
	"words_result_num": 3,
	"words_result": [
		{
			"words": "楼梯间"
		},
		{
			"words": "STAIR ROOM"
		},
		{
			"words": "K3-F3-B"
		}
	]
}

function formatJson(msg) {
  var rep = "\t";
  var jsonStr = JSON.stringify(msg, null, rep)
  var str = "";
  let s = jsonStr.replace(/"(.*)":\s(.*)/g, 
  `<span class="hljs-attr">"$1"</span>: <span class="hljs-string">$2</span>`).replace(/,<\/span>/g,'</span>,').replace(/\[<\/span>/g,'</span>[')
  return s;
}
class TechImgContent extends Component {
  constructor() {
    super()
    this.state = {
      modules: 'OCR',
      containerSize: {
        width: 820,
        height: 524
      },
      image: '',
      outputImgae: '',
      size: {
        width: '',
        height: ''
      },
      errorText: "没有图片",
      imageSate: {
        error: true,
        load: false,
        scan: false
      }
    }
  }
  componentWillReceiveProps(nextprops) {
    if(nextprops.tab==0) {
      this.setState({
        modules: 'OCR',
        image: '',
        outputImgae: '',
        error: 'true'
      })
    }else {
      this.setState({
        image: '',
        modules: 'FACE',
        outputImgae: '',
        imageSate: {error: 'true'}
      })
    }
    console.log(nextprops)
  }
  handleImageChange(e) {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    //console.log(file,formData.getAll('file'))
    const type = file.type.replace('image/', '')
    var reader = new FileReader(); //实例化文件读取对象
    reader.readAsDataURL(file); //将文件读取为 DataURL,也就是base64编码
    reader.onload = (ev) => { //文件读取成功完成时触发
        var dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
        document.getElementById('formdata').value = '';
        this.setState({
          image: dataURL,
          imageSate: {
            scan: true
          }
        })
    }
    
    if(this.state.modules==='FACE') {
      formData.append('fileName', type)
      this.handleFaceApi(formData)
    }else {
      formData.append('fileName', type)
      this.handleOCRApi(formData)
    }
    
  }
  
  handleFaceApi(formData) {
    const self = this;
    //FACE 人脸识别
   
    $.ajax({
      url:"http://47.111.95.189:800/",
      type:"post",
      data:formData,
      cache: false,
      contentType: false,    //不可缺
      processData: false,    //不可缺
      success:function(data){
        console.log(data); 
        self.setState({
          outputImgae: data.data,
          imageSate: {
            scan: false
          }
        })
      },error:function(error){
        console.log(error)
      }
    })
  }
  handleOCRApi(formData) {
    const self = this;
    console.log(formData.getAll('file'))
    console.log(formData.getAll('filename'))
    
    //OCR
    $.ajax({
      url:"http://chenk.hopto.org:808/",
      type:"post",
      data: formData,
      cache: false,
      async: false,
      contentType: false,    //不可缺
      processData: false,    //不可缺
      success:function(data){
        console.log(data); 
        self.setState({
          imageSate: {
            scan: false
          }
        })
      },error:function(error){
        console.log(error)
        self.setState({
          imageSate: {
            scan: false
          }
        })
      }
    })
  }
  
  render() {
    
    const load = this.state.imageSate.load ? '' :'none';
    const error = this.state.imageSate.error ? '' :'none';
    const scan = this.state.imageSate.scan ? '' :'none';
    return (
      <div className="tech-recognition-content">
        <div className="tech-recognition-scan" style={{display: `${scan}`}}></div>
        <div className="tech-canvas-container">
          <div className="demo-loading" style={{display: `${load}`}}>
            <img src={loading} alt="" className="spin"/>
            <p>正在上传</p>
          </div>
          <div className="demo-data-error-msg" style={{display: `${error}`}}>
            <img src={errorImg} alt=""/>
            <p>{this.state.errorText}</p>
          </div>
          <div style={{backgroundImage: `url(${this.state.image})`}} className="imageshow"></div>
          <div>{this.state.size.width}</div>
          <div className="image-input">
            <div className="a-upload">
              <button type="button" className="btn btn-primary">选择文件</button>
              <input type='file'  accept='image/*' className="file" onChange={this.handleImageChange.bind(this)} id="formdata"/>
            </div>
            <div className="image-notice">图片文件类型支持PNG、JPG、JPEG、BMP，图片大小不超过2M。</div>
          </div>
        </div>
        <div className="demo-json">
          <div className="demo-collapse-item-title demo-json-title">识别结果</div>
          {
            this.state.modules==='OCR' ? <div className="demo-json-content" dangerouslySetInnerHTML={{__html:formatJson(text)}}></div>
            : <img src={this.state.outputImgae} className="face-img"/>
          }
          
        </div>
      </div>
    )
  }
}
export default FunctionDemoStration