export default function regScroll(myhandler) {
  if(window.onscroll === null) {
    window.onscroll = myhandler
  }else if(typeof window.onscroll === 'function'){
    var oldHandler = window.onscroll;
    window.onscroll = function() {
      myhandler();
      oldHandler();
    }
  }
}