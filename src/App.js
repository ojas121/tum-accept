import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from './GradesTable.js'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import ChoiceForm from './ChoiceForm'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple, teal} from "@material-ui/core/colors";


const theme = createMuiTheme({palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
  },
});

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  App: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgGrades: [1,1,1,1,1,1],
      bonus: 0,
      subjectWeighting: [1,1,0,1,2,1],
      overallWeighting: [0.6,0.4],
    };
  }

  changeGrade = (newScore, group) => {
    let newGrades = this.state.avgGrades;
    newGrades[group-1] = newScore;
    this.setState({
      avgGrades: newGrades,
    }, () => console.log(this.state.avgGrades));
  };
  changeBonus = (newBonus) => {
    this.setState({
      bonus: newBonus,
    });
  };
  changeSubjectWeighting = (newWeight, group) => {
    let newWeights = this.state.subjectWeighting;
    newWeights[group-1] = newWeight;
    this.setState({
      avgGrades: newWeights,
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.App}>
        <Grid container spacing={16}>
          <Grid item md={5}>
            <Card>
              <CardHeader title={"Grades"}/>
              <SimpleTable changeGrade={this.changeGrade}/>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card>
              <CardHeader title={"Choices"}/>
              <CardContent>
                <ChoiceForm/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={3}>
            <Card>
              <CardHeader title={"Verdict"}/>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true }) (App);
