import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from './GradesTable.js'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardHeader'


const styles = {
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
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreNoExtra: 0,
      bonus: 0,
    };
  }

  changeBaseScore = () => {};
  changeBonus = () => {};

  render() {
    return (
      <div className="App">
        <Grid container spacing={16}>
          <Grid item md={6}>
            <Card>
              <CardHeader title={"Grades"}/>
              <SimpleTable/>
            </Card>
          </Grid>

          <Grid item md={3}>
            <Card>
              <CardHeader title={"Choices"}/>
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

export default withStyles(styles) (App);
