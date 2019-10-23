import React, {Component, Fragment} from 'react'

class TabSwitch extends Component {
  constructor(props) {
    super()
    this.state = {
      tab: 0
    }
  }
  handleClickTab(key) {
    this.setState({
      tab: key
    })
    if(this.props.handleChangeTab){
      this.props.handleChangeTab(key)
    }
  }
  render() {
    return (
      <ul className={this.props.className}>
        {this.props.children.map((child, i) => {
          return <li className={this.state.tab==i?child.props.className:''} key={i} onClick={this.handleClickTab.bind(this, i)}>{child.props.children}</li>
        })}
      </ul>
    )
  }
}

export default TabSwitch