import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  description: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0
  }
})

class DropdownModule extends Component {
  state = {
    expanded: null,
    module1: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 1,
      assessmentsTitle:
        '1. Use Git and terminal commands to manage a code base',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: 1,
      exerciseTitle:
        'https://github.com/dev-academy-challenges/taxonomic-routing'
    },
    module2: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 2,
      assessmentsTitle:
        '2. Create both server and client code that consumes a HTTP API',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: 2,
      exerciseTitle:
        'https://github.com/dev-academy-challenges/knex-relationships-stories'
    },
    module3: {
      moduleId: 3,
      moduleTitle: 'Module 3: Team Work and Leadership',
      assessmentsId: 3,
      assessmentsTitle:
        '3. Manage a programming team using agile management techniques',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: 3,
      exerciseTitle: 'Group projects'
    },
    module4: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 4,
      assessmentsTitle:
        '2. Practice attentive listening and intentional clarifying questions',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: 4,
      exerciseTitle: 'Observation'
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  render() {
    const { classes } = this.props
    const { expanded } = this.state

    return (
      <React.Fragment>
        <div className={classes.root}>
          <ExpansionPanel
            expanded={expanded === 'module1'}
            onChange={this.handleChange('module1')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module1.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.description}>
              <Typography>
                {this.state.module1.assessmentsTitle}
                <br />
                <span>Exercise: </span>
                <a href="#">{this.state.module1.exerciseTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module2'}
            onChange={this.handleChange('module2')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module2.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {this.state.module2.assessmentsTitle}
                <br />
                <span>Exercise: </span>
                <a href="#">{this.state.module2.exerciseTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module3'}
            onChange={this.handleChange('module3')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module3.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {this.state.module3.assessmentsTitle}
                <br />
                <span>Exercise: </span>
                <a href="#">{this.state.module3.exerciseTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module4'}
            onChange={this.handleChange('module4')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module4.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {this.state.module4.assessmentsTitle}
                <br />
                <span>Exercise: </span>
                <a href="#">{this.state.module4.exerciseTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </React.Fragment>
    )
  }
}

DropdownModule.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DropdownModule)
