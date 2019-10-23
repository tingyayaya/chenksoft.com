import loadable from '@/utils/loadable'

const Index = loadable(() => import('@/pages/Index'))
const Product = loadable(() => import('@/pages/Product'))
const Download = loadable(() => import('@/pages/Download'))
const Case = loadable(() => import('@/pages/Case'))
const Contact = loadable(() => import('@/pages/Contact'))
const About = loadable(() => import('@/pages/About'))
const Video = loadable(() => import('@/pages/Video'))
const VideoList = loadable(() => import('@/pages/VideoList'))
const Demo = loadable(() => import('@/pages/Demo'))
const Custom = loadable(() => import('@/pages/Custom'))


var routes = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/product/:proId',
    component: Product
  },
  {
    path: '/download',
    component: Download
  },
  {
    path: '/case',
    component: Case
  },
  {
    path: '/contact',
    component: Contact
  },{
    path: '/about',
    component: About
  },
  {
    path: '/video/:videoId',
    component: Video
  },
  {
    path: '/videolist',
    component: VideoList
  },
  {
    path: '/demo',
    component: Demo
  },
  {
    path: '/custom',
    component: Custom
  }
]
export default routes