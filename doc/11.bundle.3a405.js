(window.webpackJsonp=window.webpackJsonp||[]).push([[11,1,2,3],{183:function(e,t){},184:function(e,t){},185:function(e,t){},22:function(e,t,n){"use strict";n.r(t);var a,r=n(2),i=n.n(r),l=n(3),s=n.n(l),c=n(4),o=n.n(c),u=n(5),m=n.n(u),p=n(6),v=n.n(p),h=n(0),d=n.n(h),E=n(36),f=n(30),b=n(7),y=(n(183),n(84)),N=n.n(y),k=n(85),g=n.n(k),w=Object(b.b)("store")(a=Object(b.c)(a=function(e){function t(){var e;return i()(this,t),(e=o()(this,m()(t).call(this))).state={hasData:!1},e}return v()(t,e),s()(t,[{key:"componentWillMount",value:function(){this.props.store.ProductName._getProducts(),this.props.store.SysNameApi._getSysName()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){this.props.match;var e=this.props.store.ProductName.menu,t=this.props.store.SysNameApi.data;return d.a.createElement("header",{className:"header"},d.a.createElement("div",{className:"hotline"},d.a.createElement("img",{src:g.a}),"  ",d.a.createElement("span",null,"400-6990-220")),d.a.createElement("div",{className:"nav"},d.a.createElement("img",{src:N.a,alt:"",className:"logo"})," ",d.a.createElement("span",{className:"system_name"},t),d.a.createElement("ul",{className:"navagition"},e.map(function(e,t){return d.a.createElement(C,{item:e,key:t})}))))}}]),t}(h.Component))||a)||a,C=function(e){function t(){var e;return i()(this,t),(e=o()(this,m()(t).call(this))).state={show:!1},e}return v()(t,e),s()(t,[{key:"handleEnter",value:function(){this.timer&&clearInterval(this.timer),this.setState({show:!0})}},{key:"handleOut",value:function(){var e=this;this.timer=setInterval(function(){e.setState({show:!1})},500)}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"handleSubnav",value:function(e){this.setState({show:e})}},{key:"render",value:function(){var e,t=this.props.item;return e=t.subnav?1===t.subnav.length?d.a.createElement(E.a,{to:"/product/".concat(t.subnav[0].id),activeClassName:"active"},"产品"):d.a.createElement("span",{onMouseEnter:this.handleEnter.bind(this),onMouseLeave:this.handleOut.bind(this)},this.state.show?d.a.createElement(S,{subnav:t.subnav,handleSubnav:this.handleSubnav.bind(this)}):"",d.a.createElement("span",null,t.name)):d.a.createElement(E.a,{to:t.path,activeClassName:"active",exact:t.exact},t.name),d.a.createElement("li",null,e)}}]),t}(h.Component),S=function(e){function t(){return i()(this,t),o()(this,m()(t).apply(this,arguments))}return v()(t,e),s()(t,[{key:"handleSubnav",value:function(){this.props.handleSubnav(!1)}},{key:"render",value:function(){var e=this,t=this.props.subnav;return d.a.createElement("ul",{className:"sub-nav"},t.map(function(t,n){return d.a.createElement("li",{key:n},d.a.createElement(f.a,{to:"/product/".concat(t.id),onClick:e.handleSubnav.bind(e)},t.pro_name))}))}}]),t}(h.Component);t.default=w},23:function(e,t,n){"use strict";n.r(t);var a,r=n(2),i=n.n(r),l=n(3),s=n.n(l),c=n(4),o=n.n(c),u=n(5),m=n.n(u),p=n(6),v=n.n(p),h=n(0),d=n.n(h),E=n(51),f=n.n(E),b=n(7),y=(n(21),n(87),n(184),Object(b.b)("store")(a=Object(b.c)(a=function(e){function t(e){return i()(this,t),o()(this,m()(t).call(this,e))}return v()(t,e),s()(t,[{key:"componentWillMount",value:function(){this.props.store.bannerApi._getBanner()}},{key:"render",value:function(){var e={loop:!0,autoplay:!0,observer:!0,observeParents:!1,onSlideChangeEnd:function(e){e.update(),mySwiper.startAutoplay(),mySwiper.reLoop()},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},spaceBetween:30},t=this.props.store.bannerApi.banners;return d.a.createElement("div",{className:"swiper-bannner"},d.a.createElement(f.a,e,t.map(function(e,t){return d.a.createElement("div",{key:t},d.a.createElement("div",{style:{backgroundImage:"url(".concat(e,")")},className:"banner-img"}))})))}}]),t}(h.Component))||a)||a);t.default=y},24:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(3),l=n.n(i),s=n(4),c=n.n(s),o=n(5),u=n.n(o),m=n(6),p=n.n(m),v=n(0),h=n.n(v),d=n(36),E=(n(185),function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){this.props.match;return h.a.createElement("footer",null,h.a.createElement("div",{className:"view-960"},h.a.createElement("div",{className:"nav"},h.a.createElement("ul",{className:"navagition"},h.a.createElement("li",null,h.a.createElement(d.a,{to:"/",exact:!0,activeClassName:"active"},"首页")),h.a.createElement("li",null,h.a.createElement(d.a,{to:"/download",activeClassName:"active"},"软件下载")),h.a.createElement("li",null,h.a.createElement(d.a,{to:"/case",activeClassName:"active"},"客户案列")),h.a.createElement("li",null,h.a.createElement(d.a,{to:"/contact",activeClassName:"active"},"联系我们")),h.a.createElement("li",null,h.a.createElement(d.a,{to:"/about",activeClassName:"active"},"关于我们")))),h.a.createElement("div",{className:"copy"},"©2015    杭州晨科软件技术有限公司 版权所有    浙ICP备09081089号-1    公安备案号-33010602005139")))}}]),t}(v.Component));t.default=E},259:function(e,t){},292:function(e,t,n){"use strict";n.r(t);var a,r=n(2),i=n.n(r),l=n(3),s=n.n(l),c=n(4),o=n.n(c),u=n(5),m=n.n(u),p=n(6),v=n.n(p),h=n(0),d=n.n(h),E=n(22),f=n(23),b=n(176),y=n(7),N=n(30),k=(n(258),n(259),Object(y.b)("store")(a=Object(y.c)(a=function(e){function t(){return i()(this,t),o()(this,m()(t).apply(this,arguments))}return v()(t,e),s()(t,[{key:"componentWillMount",value:function(){this.props.store.VideoApi._getVideo()}},{key:"render",value:function(){var e=this.props.store.VideoApi.videoList;return d.a.createElement("div",{className:"video-page"},d.a.createElement("p",null,"视频列表"),d.a.createElement("ul",{className:"video"},e.map(function(e,t){return d.a.createElement(N.a,{to:"/video/".concat(e.id),key:t},d.a.createElement("li",null,d.a.createElement("span",null,e.video_title),d.a.createElement("span",{className:"w-icon w-icon-right"})))})))}}]),t}(h.Component))||a)||a),g=(h.Component,k),w=n(24),C=function(e){function t(){return i()(this,t),o()(this,m()(t).apply(this,arguments))}return v()(t,e),s()(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(E.default,null),d.a.createElement(f.default,null),d.a.createElement(g,null),d.a.createElement(w.default,null))}}]),t}(h.Component);t.default=C},84:function(e,t,n){e.exports=n.p+"images/logo.png"},85:function(e,t,n){e.exports=n.p+"images/电话.svg"}}]);