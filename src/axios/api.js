// import axios from 'axios' 
import req from '@/axios/axios.js'
import domain from '@/utils/getDomainName'
//axios.defaults.timeout = 5000;
//axios.defaults.baseURL = 'http://juejin-demo/api/v1'
//const baseURL = 'http://localhost:8080/ckapi/api/76/v2'
const baseURL = 'http://hz.chenksoft.com:80/ckapi/api/1/v2'


export const params = {
  token: 'chenksoft!@!',
  domain: `${domain.name}.chenksoft.com`
}

export async function _getBanner(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/pic.jsp`, Data)
}

export async function _getFuncIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_func.jsp`, Data)
}

export async function _getFuncTitleIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_func_title.jsp`, Data)
}

export async function _getAdvIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_adv.jsp`, Data)
}

export async function _getAdvDesIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_adv_description.jsp`, Data)
}

export async function _getInstroductionIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_solution.jsp`, Data)
}

export async function _getInstroductionTitleIndex(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/index_solution_title.jsp`, Data)
}

export async function _getHeaderProduct(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/product_top_content.jsp`, Data)
}

export async function _getHeaderLableProduct(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/product_top_lable.jsp`, Data)
}

export async function _getCenterProduct(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/product_center_content.jsp`, Data)
}

export async function _getCenterTitleProduct(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/product_center_title.jsp`, Data)
}

export async function _getFootContentProduct(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/pro-foot.jsp`, Data)
}

export async function _getProducts(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/select_pro_id.jsp`, Data)
}

export async function _getSysName(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/get_sys_name.jsp`, Data)
}

export async function _getVideo(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/get_video.jsp`, Data)
}

export async function _getVideourlById(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/get_videourl_byid.jsp`, Data)
}

export async function _getMobileBanner(data) {
  const Data = Object.assign({},params, data);
  return req.get(`${baseURL}/mobile_banner.jsp`, Data)
}