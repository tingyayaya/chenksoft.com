
import { observable, action } from 'mobx';
import { _getBanner, _getFuncIndex, _getFuncTitleIndex, _getAdvIndex, _getAdvDesIndex, _getInstroductionIndex, _getInstroductionTitleIndex,
  _getHeaderProduct, _getHeaderLableProduct, _getCenterTitleProduct, _getCenterProduct, _getFootContentProduct, _getProducts, _getSysName,
  _getVideourlById, _getVideo, _getMobileBanner} from '@/axios/api'
  
//判断是手机还是pc
import isPc from '@/utils/isPc'

import banner1 from '@/images/m-banner1.jpg'

const imgUrl = 'http://hz.chenksoft.com:80/SK_CFW_Servlet.do?method=downfile';

const stores = {
  //移动端 pc判断
  isPc: observable({
    flag: true,
    getResult() {
      this.flag = isPc();
    }
  }),
  //轮播
  bannerApi : observable({
    banners: [],
    async _getBanner() {
      const Data = await _getBanner()
      this.banners = Data.data.data.map((item, index)=> {
        const num = parseInt(item.pic)
        return `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
      });
    }
  }),
  //首页功能模块+标题
  FuncIndexApi: observable({
    data: [],
    title: '',
    async _getFuncIndex() {
      const Data = await _getFuncIndex()
      const Title = await _getFuncTitleIndex()
      this.data = Data.data.data.map((item, index) => {
        const num = parseInt(item.func_logo)
        return {
          "title": item.func_title,
          "content": item.func_content,
          "thumb": `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
        }
      })
      if(Title.data.data.length) {
        this.title = Title.data.data[0].index_func_title;
      }
    }
  }),
  //首页 四个特点
  AdvIndexApi: observable({
    data: [],
    title: {
      index_adv_title: '我不是标题， 我只是占位符',
      index_adv_description: '我不是描述， 我只是占位符'
    },
    async _getAdvIndex() {
      const Data = await _getAdvIndex()
      const Title = await _getAdvDesIndex()
      if(Data.data.data.length) {
        this.data = Data.data.data.map((item, index) => {
          const str = item.index_adv_content.substring(2).split('的')
          return {
            title: item.index_adv_content.substring(0,2),
            des: str[0]+"的",
            span: str[1]
          }
        });
      }
      if(Title.data.data.length) {
        this.title = Title.data.data[0]
      }
      
    }
  }),
  //首页行业列表
  InstrodutionApi: observable({
    data: [],
    title: '',
    async _getInstroductionIndex() {
      const Data = await _getInstroductionIndex();
      const Title = await _getInstroductionTitleIndex();
      this.data = Data.data.data.map((item, index) => {
        const num = parseInt(item.index_solution_logo)
        return {
          title : item.index_solution_name,
          thumb: `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
        }
      })
      if(Title.data.data.length) {
        this.title = Title.data.data[0].index_solution_title;
      }
    }
  }),
  //产品简介
  HeaderProApi: observable({
    data: {},
    async _getHeaderProduct(data) {
      const Data = await _getHeaderProduct(data);
      if(Data.data.data.length) {
        const num = parseInt(Data.data.data[0]['skt16.skf178'])
        this.data = {
          title : Data.data.data[0]['skt16.skf179'],
          subTitle: Data.data.data[0]['skt16.skf180'],
          desc: Data.data.data[0]['skt16.skf181'],
          thumb: `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
        }
      }else {
        this.data = {}
      }
    }
  }),
  //产品模块列表
  HeaderLableProApi: observable({
    label: [],
    async _getHeaderLableProduct(data) {
      const Data = await _getHeaderLableProduct(data);
      this.label = Data.data.data
    }
  }),
  //产品功能模块介绍
  CenterProApi: observable({
    data:[],
    title: '',
    async _getCenterProduct(data) {
      const Data = await _getCenterProduct(data);
      const Title = await _getCenterTitleProduct(data);
      if(Data.data.data.length) {
        this.data = Data.data.data.map((item, index) => {
          const num = parseInt(item['skt19.skf203'])
          return {
            "title": item['skt19.skf204'],
            "content": item['skt19.skf205'],
            "thumb": `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
          }
        })
      }else {
        console.error('没有数据')
        this.data = []
      }

      if(Title.data.data.length) {
        this.title = Title.data.data[0]['skt18.skf196']
      }else {
        console.error('没有标题的数据')
        this.title = ''
      }
      
    }
  }),
  //产品图文介绍
  FooterProApi: observable({
    data:[],
    async _getFootContentProduct(data) {
      const Data = await _getFootContentProduct(data);
      const Json = JSON.parse(Data.data.data[0].result)
      this.data = Json.map((item, index) => {
        item.item.map((item2)=> {
          const num = parseInt(item2.img)
          item2.img = `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
          return item2
        })
        return item
      })
    }
  }),
  //系统名称
  SysNameApi: observable({
    data: '',
    async _getSysName(data) {
      const Data = await _getSysName(data);
      if(Data.data.data.length) {
        this.data = Data.data.data[0].sys_name
      }
    }
  }),
  //产品列表
  ProductName: observable({
    productsNav: [],
    shape: '',
    menu: [ 
      {
        path: '/',
        name: '首页',
        exact: true
      },
      {
        path: '/prodcut',
        name: '产品',
        subnav: []
      },
      {
        path: '/custom',
        name: '定制服务'
      },
      {
        path: '/download',
        name: '软件下载'
      },
      
      {
        path: '/case',
        name: '客户案列'
      },
      {
        path: '/contact',
        name: '联系我们'
      },
      {
        path: '/about',
        name: '关于我们'
      }
    ],
    async _getProducts() {
      const Data = await _getProducts();
      this.menu[1].subnav = Data.data.data;
      if(Data.data.data.length) {
        this.productsNav = Data.data.data.map((item, index) => {
          if(index==0) {
            this.shape = item.shape
          }
          if(item.image==''||item.image==null) {
            item.image = null
          }else {
            const num = parseInt(item.image)
            item.image = `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
          }
          return item
        })
        
      }
      
    }
  }),
  //视频列表
  VideoApi: observable({
    video: '',
    videoList: [],
    videoListTopThree: [],
    async _getVideo(data) {
      const Data = await _getVideo(data);
      let arr = []
      this.videoList = Data.data.data.map((item, index)=> {
        const num = parseInt(item.thumb)
        item.thumb = `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
        if(index<=2) {
          arr.push(item)
        }
        return item
      })
      this.videoListTopThree = arr;
      return this.videoList.length;
    },
    //单个视频信息
    async _getVideourlById(data) {
      const Data = await _getVideourlById(data);
      this.video = Data.data.data[0];
      return this.video
    }
  }),
  //手机轮播图片
  MobileBannerApi: observable({
    data: [],
    async _getMobileBanner(data) {
      const Data = await _getMobileBanner(data)
      if(Data.data.data.length) { 
        this.data = Data.data.data.map((item, index) => {
          if(item.banner!==null) {
            const num = parseInt(item.banner)
            item.banner = `${imgUrl}&fid=${num}&filename=${num}&domainid=1`
          }else {
            item.banner = null
          }
          return item
        })
      }
    }
  })
  
}
export default stores