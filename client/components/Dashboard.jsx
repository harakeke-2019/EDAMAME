import React, { Component } from 'react'
import ProgressModule from './ProgressModule'
import ProgressBar from './ProgressBar'

export default class Dashboard extends Component {

  state = {
    percentage1: 25,
    percentage2: 36,
    percentage3: 90,
    percentage4: 10
  }

  render() {
    return (
    <React.Fragment>
      <div className="progressBar">
        <ProgressBar />
      </div>

      <div className="progress-module">
        <div><ProgressModule percentage={this.state.percentage1} />
        Tracked Item 1</div>

        <div><ProgressModule percentage={this.state.percentage2} />
        Tracked Item 2</div>

        <div><ProgressModule percentage={this.state.percentage3} />
        Tracked Item 3</div>

        <div><ProgressModule percentage={this.state.percentage4} />
        Tracked Item 4</div>
      </div>
    </React.Fragment>
    )
  }
}
