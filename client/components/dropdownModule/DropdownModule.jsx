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
      assessment1: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 1,
      assessmentsTitle:
        '1. Use Git and terminal commands to manage a code base',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment2: {
        moduleId: 1,
        moduleTitle: 'Module 1: Core Programming',
        assessmentsId: 2,
        assessmentsTitle:
          '2. Use npm to manage library dependencies',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle:
          ''
    },
    assessment3: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 3,
      assessmentsTitle:
        '3. Create well structured and tested code using JavaScript ES6',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment4: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 4,
      assessmentsTitle:
        '4. Design, build and use a relational database to persist data',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment5: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 5,
      assessmentsTitle:
        '5. Create code which reads and writes to the filesystem',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment6: {
      moduleId: 1,
      moduleTitle: 'Module 1: Core Programming',
      assessmentsId: 6,
      assessmentsTitle:
        '6. Build a Command Line Interface tool',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    },
    module2: {
      assessment1: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 7,
      assessmentsTitle:
        '1. Produce and deploy a tested HTTP server with a restful JSON API',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment2:{
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 8,
      assessmentsTitle:
        '2. Create both server and client code that consumes a HTTP API',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment3: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 9,
      assessmentsTitle:
        '3. Create a rich client application using React and Redux',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment4: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 10,
      assessmentsTitle:
        '4. Create a responsive website using HTML and CSS',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment5: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 11,
      assessmentsTitle:
        '5. Use routing libraries to manage large client and server code bases ',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
    assessment6: {
      moduleId: 2,
      moduleTitle: 'Module 2: Web development',
      assessmentsId: 12,
      assessmentsTitle:
        '6. Secure a web application using Authentication libraries',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle:
        ''
    },
  },
    module3: {
      assessment1: {
        moduleId: 3,
      moduleTitle: 'Module 3: Team Work and Leadership',
      assessmentsId: 13,
      assessmentsTitle:
        '1. Manage a programming team using agile management techniques',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
      },
      assessment2: {
        moduleId: 3,
        moduleTitle: 'Module 3: Team Work and Leadership',
        assessmentsId: 14,
        assessmentsTitle:
          '2. Give and receive constructive feedback to/from team mates',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle: ''
      },
      assessment3: {
        moduleId: 3,
        moduleTitle: 'Module 3: Team Work and Leadership',
        assessmentsId: 15,
        assessmentsTitle:
          '3. Present a technical project to a non-technical audience',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle: ''
      },
      assessment4: {
        moduleId: 3,
        moduleTitle: 'Module 3: Team Work and Leadership',
        assessmentsId: 16,
        assessmentsTitle:
          '4. Research a novel technology and teach it to others',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle: ''
      },
      assessment5: {
        moduleId: 3,
        moduleTitle: 'Module 3: Team Work and Leadership',
        assessmentsId: 17,
        assessmentsTitle:
          '5. Deliver a code review and provide technical feedback',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle: ''
      },
      assessment6: {
        moduleId: 3,
        moduleTitle: 'Module 3: Team Work and Leadership',
        assessmentsId: 18,
        assessmentsTitle:
          '6. Review a presentation and provide meaningful feedback',
        description: 'desc',
        link: 'link',
        week_day: 'weekday',
        exerciseId: null,
        exerciseTitle: ''
      },
    },
    module4: {
      assessment1: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 19,
      assessmentsTitle:
        '1. Create and follow a self-directed learning and personal development plan',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    },
    assessment2: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 20,
      assessmentsTitle:
        '2. Practice attentive listening and intentional clarifying questions',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    },
    assessment3: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 21,
      assessmentsTitle:
        '3. Display inclusive and supportive behaviour towards all team mates',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    },
    assessment4: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 22,
      assessmentsTitle:
        '4. Resolve interpersonal conflict in a technical project',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    },
    assessment5: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 23,
      assessmentsTitle:
        '5. Hold a difficult conversation',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    },
    assessment6: {
      moduleId: 4,
      moduleTitle: 'Module 4: Human Skills',
      assessmentsId: 24,
      assessmentsTitle:
        '6. Actively contribute to creating a productive and inclusive team culture',
      description: 'desc',
      link: 'link',
      week_day: 'weekday',
      exerciseId: null,
      exerciseTitle: ''
    }
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
                {this.state.module1.assessment1.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href="#">{this.state.module1.assessment1.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module1.assessment2.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module1.assessment3.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module1.assessment4.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module1.assessment5.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module1.assessment6.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module2'}
            onChange={this.handleChange('module2')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module2.assessment1.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href="#">{this.state.module2.assessment1.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module2.assessment2.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module2.assessment3.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module2.assessment4.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module2.assessment5.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module2.assessment6.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module3'}
            onChange={this.handleChange('module3')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module3.assessment1.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href="#">{this.state.module3.assessment1.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module3.assessment2.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module3.assessment3.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module3.assessment4.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module3.assessment5.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module3.assessment6.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            expanded={expanded === 'module4'}
            onChange={this.handleChange('module4')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {this.state.module4.assessment1.moduleTitle}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href="#">{this.state.module4.assessment1.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module4.assessment2.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module4.assessment3.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module4.assessment4.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module4.assessment5.assessmentsTitle}</a>
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
              <a href="#">{this.state.module4.assessment6.assessmentsTitle}</a>
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
