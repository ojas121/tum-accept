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
        width: '100%',
    },
    grid: {
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 0,
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avgGrades: [null, null, null, null, null, null],
            finalGrades: [null, null, null, null, null, null],
            bonus: 0,
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
                <Grid container spacing={16} className={classes.grid}>
                    <Grid item md={3}>
                        <Card>
                            <CardHeader title={"Instructions"}/>
                            <CardContent>
                                Enter your IB grades here. Language 1 refers to English, and 2 to German. Use the dropdown to select what your Group 6 subject is. Further Maths is not supported by this tool.<br/><br/>
                                Bonus points refer to different activities you participate in that the TUM can decide to honor with points. You can receive upto 2 bonus points for each activity, upto a maximum of 6. See TUM documents for more info.<br/><br/>
                                The points provided here are a conservative estimate of the TUM's actual criteria. TUM says that they will round up at some intermediate points, which this tool does not do. Rounding only takes place at the final step in this tool, and it will be rounded up, like the TUM does.<br/><br/>
                                <br/>
                                <b>I DO NOT TAKE ANY LIABILITY FOR ANY RESULTS THIS TOOL GIVES YOU, AND FOR ANY DECISIONS YOU MAKE A RESULT. I will make all efforts to keep this accurate, but make no guarantees that it is so. By using this tool, you agree with the above.</b>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card>
                            <CardHeader title={"Grades"}/>
                            <SimpleTable changeGrade={this.changeGrade} changeBonus={this.changeBonus} changeFinalGrade={this.changeFinalGrade} changeType6={this.changeType6}/>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card>
                            <CardHeader title={"Verdict"}/>
                            <CardContent>
                                <Verdict avgGrades={this.state.avgGrades} bonus={this.state.bonus} finalGrades={this.state.finalGrades} type6={this.state.type6}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true }) (App);
