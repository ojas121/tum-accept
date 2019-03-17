import React, { Component } from 'react';
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
import {Typography} from "@material-ui/core";

class Verdict extends React.Component {

    calculateScore() {
        let total = 0;

        let averageTotal = 0;
        this.props.finalGrades.forEach(grade => {
            let newGrade = 100- (20*(7-Number(grade)));
            averageTotal += newGrade;
        });
        averageTotal = averageTotal/6;
        total += averageTotal * 0.65;
        console.log(averageTotal);

        let allWeighted = 0;
        let numberWeighted = 0;
        for(let i = 0; i < 6; i++) {
            let newGrade = 100- (20*(7-Number(this.props.avgGrades[i])));
            allWeighted += newGrade * Number(this.props.subjectWeighting[i]);
            numberWeighted += Number(this.props.subjectWeighting[i]);
            console.log(this.props.subjectWeighting[i]);
        }
        total += (allWeighted*0.35/numberWeighted);

        total += Number(this.props.bonus);

        return total;
    }

    render() {
        let score = this.calculateScore();
        let mw, es;
        if(score >= 82) {
            es = "Accepted";
        } else if (score > 74) {
            es = "Interview";
        } else {
            es = "Not accepted";
        }

        if(score >= 75) {
            mw = "Accepted";
        } else if (score > 67) {
            mw = "Interview";
        } else {
            mw = "Not accepted";
        }

        return(<div>
            <Typography variant="overline">Your score: </Typography>
            <Typography variant="h6">{score}</Typography>
            <Typography variant="overline">Maschinenwesen: </Typography>
            <Typography variant="h6">{mw}</Typography>
            <Typography variant="overline">Engineering Science: </Typography>
            <Typography variant="h6">{es}</Typography>
        </div>);
    }

}

export default Verdict;