import React from 'react';
import Loadable from 'react-loadable';
import './loadable.scss'

//通用的过长组件
const loadingComponent = ()=> {
  return (
    <div></div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader,loading = loadingComponent)=>{
  return Loadable({
      loader,
      loading
  });
}

const bannerLoading = ()=> {
  return (
    <div className="banner-loadable"></div>
  )
}
const headerLoading = ()=> {
  return (
    <div className="header-loadable"></div>
  )
}
//bannerLoable
export function bannerLoable (loader,loading = bannerLoading){
  return Loadable({
    loader,
    loading
  });
}
//headerLoable
export function headerLoable (loader,loading = headerLoading){
  return Loadable({
    loader,
    loading
  });
}