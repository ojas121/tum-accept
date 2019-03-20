import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from './GradesTable.js'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple, teal} from "@material-ui/core/colors";
import Verdict from "./Verdict";


const theme = createMuiTheme({
    palette: {
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
    typography: {
        useNextVariants: true,
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
            avgGrades: [null, null, null, null, null, null],
            finalGrades: [null, null, null, null, null, null],
            bonus: 0,
            subjectWeighting: [null, null, null, null, null, null],
            totalWeight: 0.65,
            type6: "Arts",
        };
    }

    changeGrade = (newScore, group) => {
        let newGrades = this.state.avgGrades;
        newGrades[group-1] = newScore;
        this.setState({
            avgGrades: newGrades,
        }, () => console.log(this.state.avgGrades));
    };

    changeFinalGrade = (finalGrade, group) => {
        let newFinal = this.state.finalGrades;
        newFinal[group-1] = finalGrade;
        this.setState({
            finalGrades: newFinal,
        }, () => console.log(this.state));
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

    changeTotalWeighting = (totalWeight) => {
        this.setState({
            totalWeight: totalWeight,
        });
    };

    changeType6 = (new6) => {
        this.setState({
            type6: new6,
        });
        console.log(new6);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.App}>
                <Grid container spacing={16}>
                    <Grid item md={3}>
                        <Card>
                            <CardHeader title={"Choices"}/>
                            <CardContent>
                                Instructions
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card>
                            <CardHeader title={"Grades"}/>
                            <SimpleTable changeGrade={this.changeGrade} changeFinalGrade={this.changeFinalGrade} changeType6={this.changeType6}/>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card>
                            <CardHeader title={"Verdict"}/>
                            <CardContent>
                                <Verdict totalWeight={this.state.totalWeight} avgGrades={this.state.avgGrades} subjectWeighting={this.state.subjectWeighting} bonus={this.state.bonus} finalGrades={this.state.finalGrades}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true }) (App);
