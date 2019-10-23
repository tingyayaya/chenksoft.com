import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import "./caselist.scss"

import COMPANY from  "@/data/company.js"

class CaseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      louti: [],
      table: COMPANY.deal,
      position: 'absolute',
      miniTop: 100,
      index: 0
    }
  }
  _scroll() {
    let scrollTop = document.documentElement.scrollTop || document.body/scrollTop
    const sTop = ReactDOM.findDOMNode(this.refs.toutiall).getBoundingClientRect().top;
    const {miniTop} = this.state
    if(sTop < miniTop) {
      this.setState({
        position: 'fixed'
      })
    }else {
      this.setState({
        position: 'absolute'
      })
    }
    const ele = document.getElementsByClassName('louti')
    for(let i=0; i<ele.length; i++) {
      const clientrect = ele[i].getBoundingClientRect()
      if(clientrect.top< 500 && clientrect.top>0) {
        this.setState({
            index: i
          })
        return;
      }
    }
  }
  onMenuClick(y) {
    this.setState({
      index: y
    })
    const scrollTop = document.documentElement.scrollTop || document.body/scrollTop
    const pos = document.getElementById(`louti${y}`).getBoundingClientRect()
    window.scrollTo(pos.x, pos.y+scrollTop-100);
  }
  
  componentDidMount() {
    regScroll(this._scroll.bind(this));
  }
  componentWillUnmount() {
    window.onscroll = ''
    //window.removeEventListener('scroll',this._scroll.bind(this))
  }
  render() {
    const { table } = this.state
    return (
      <div className="table-content" >
        <div id="menu" style={{position: this.state.position}} >
          <ul>
            {
              table.map((item, index) => {
                return <Nav item={item.name} key={index} activeIndex={this.state.index} index={index} navClick={this.onMenuClick.bind(this)}/>
              })
            }
          </ul>
        </div>
        <div className="s-tab-content" id="refall" ref="toutiall">
          {
            table.map((item, index) => {
              return <Table table={item} key={index} refName={`louti${index}`} />
            })
          }
        </div>
      </div>
    )
  }
}

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  static defaultProps = {
    item: '没有数据'
  }
  _click(index) {
    this.props.navClick&&this.props.navClick(index)
  }
  render() {
    const {item, index} = this.props
    return (
      <li onClick={this._click.bind(this, index)} className={this.props.activeIndex==index?"active":''}>{item}</li>
    )
  }
}


class Table extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const TABLE = this.props.table;
    const refName = this.props.refName
    return (
      <div className="louti">
        <h5>{TABLE.name}</h5>
        <table className="table table-striped" ref={refName} id={refName}>
          <tbody >
          {
            TABLE.company.map(function(item, index) {
              return  <tr key={index}>
                        {item.map(function(item1,index1) {
                          return <td key={index1}>{item1}</td>
                        })}
                      </tr>
            })
          }
          </tbody>
        </table>
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

export default CaseList