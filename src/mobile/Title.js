import React, {Component} from 'react'

import './title.scss'

class Title extends Component {
  render() {
    return (
      <div className="m-title">
        {this.props.children}
      </div>
    )
  }
}
export default Title