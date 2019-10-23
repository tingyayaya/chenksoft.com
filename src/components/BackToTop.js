import React, {Component} from 'react'

import up from '@/images/file_up.svg'

import './backtotop.scss'

class BackToTop extends Component {
  constructor() {
    super() 
    this.state = {
      show: false
    }
  }
  handleGoTop() {
    window.scrollTo( 0, 0)
  }
  _scroll() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop > 1000) {
      this.setState({
        show: true
      })
    }else{
      this.setState({
        show: false
      })
    }
  }
  componentDidMount() {
    regScroll(this._scroll.bind(this));
    //window.addEventListener('scroll', this._scroll.bind(this))
  }
  componentWillUnmount() {
    window.onscroll = ''
    //window.removeEventListener('scroll',this._scroll.bind(this))
  }
  render() {
    const { show } = this.state
    return (
      <div className="suspension-panel">
        {
          show &&
          <div className="fixed-btn"
            onClick={this.handleGoTop.bind(this)} >
            <img src={up} alt="" className="arrow-drop"/>
          </div> 
        }
      </div>
    )
  }
}
function regScroll(myhandler) {
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

export default BackToTop