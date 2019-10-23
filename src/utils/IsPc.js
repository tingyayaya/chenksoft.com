 function IsPC() {

  var userAgentInfo = navigator.userAgent;

  var Agents = ["Android", "iPhone",

              "SymbianOS", "Windows Phone",

              "iPad", "iPod"];

  var flag = true;

  for (var v = 0; v < Agents.length; v++) {

      if (userAgentInfo.indexOf(Agents[v]) > 0) {

          flag = false;

          break;

      }

  }
  
  if(!flag) {
    var oMeta = document.createElement('meta');
    oMeta.content = 'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui';
    oMeta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
  }

  fontsize()

  return flag;

}
export default IsPC

function fontsize(params) {
  var docEl = document.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

  recalc = function () {
    var clientWidth = docEl.clientWidth>828 ? 828 :docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100* clientWidth/828+'px';
  };

  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}