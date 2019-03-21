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

    mw() {
        let totalAvg = 0;
        let score = 0;

        this.props.avgGrades.forEach((old) => {
            totalAvg += Number(this.convert(old));
        });
        totalAvg = totalAvg/6;
        score += totalAvg * 0.65;

        let convertedFinal = [];
        this.props.finalGrades.forEach((old) => {
            convertedFinal.push(this.convert(old));
        });
        let totalFinal = 0;
        totalFinal += Number(convertedFinal[1]);
        totalFinal += Number(convertedFinal[3]) * 2;
        totalFinal += Number(convertedFinal[4]) * 3;
        if (this.props.type6 === "Science") {
            totalFinal += Number(convertedFinal[5]) * 2;
            totalFinal = totalFinal/8;
        } else {
            totalFinal = totalFinal/6;

        }
        score = score + (totalFinal * 0.35);
        return score;
    }

    es() {
        let totalAvg = 0;
        let score = 0;

        this.props.avgGrades.forEach((old) => {
            totalAvg += Number(this.convert(old));
        });
        totalAvg = totalAvg/6;
        score += totalAvg * 0.65;

        let convertedFinal = [];
        this.props.finalGrades.forEach((old) => {
            convertedFinal.push(this.convert(old));
        });
        let totalFinal = 0;
        totalFinal += Number(convertedFinal[0]);
        totalFinal += Number(convertedFinal[1]);
        totalFinal += Number(convertedFinal[3]);
        totalFinal += Number(convertedFinal[4]) * 2;
        if (this.props.type6 === "Science") {
            totalFinal += Number(convertedFinal[5]);
            totalFinal = totalFinal/6;
        } else {
            totalFinal = totalFinal/5;

        }
        score = score + (totalFinal * 0.35);
        if (score < 0 || isNaN(score) || score == null) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant="subtitle1">Score cannot be calculated</Typography>
            </span>);
        } else if (score >= 82) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Accepted</Typography>
            </span>);
        } else if (score > 74) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Interview</Typography>
            </span>);
        } else {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Declined</Typography>
            </span>);
        }

    }

    convert(old) {
        return 100- (20*(7-Number(old)));
    }

    render() {
        return(<div>
            <Typography variant="overline">Maschinenwesen: </Typography>
            {this.mw()}
            <Typography variant="overline">Engineering Science: </Typography>
            {this.es()}
        </div>);
    }

}

export default Verdict;