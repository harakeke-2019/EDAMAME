
import React, { Component } from 'react'
import ProgressModule from './ProgressModule'
import DropdownModule from './dropdownModule/DropdownModule'

export default class Dashboard extends Component {

  state = {
    percentage: 20
  }

  render() {
    return (
      <React.Fragment>
      <div className="progress-module">
        <ProgressModule percentage={this.state.percentage} />
        <div>Module 1</div>

        <ProgressModule percentage={this.state.percentage} />
        <div>Module 2</div>

        <ProgressModule percentage={this.state.percentage} />
        <div>Module 3</div>

        <ProgressModule percentage={this.state.percentage} />
        <div>Module 4</div>
        <DropdownModule />
      </div>
    </React.Fragment>
    )
  }
}
