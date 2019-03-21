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

        if (Number(score) > Math.round(Number(score))) {
            score = 1 + Math.round(Number(score));
        } else {
            score = Math.round(score);
        }
        score += this.props.bonus;
        if (score < 0 || isNaN(score) || score == null) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant="subtitle1">Score cannot be calculated</Typography>
            </span>);
        } else if (score >= 75) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Accepted</Typography>
            </span>);
        } else if (score > 67) {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Interview</Typography>
            </span>);
        } else {
            return (<span style={{whiteSpace: "nowrap"}}>
                <Typography variant={"h6"}>{Math.round(score)}</Typography><Typography variant="subtitle1">Declined</Typography>
            </span>);
        }

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
        if (Number(score) > Math.round(Number(score))) {
            score = 1 + Math.round(Number(score));
        } else {
            score = Math.round(score);
        }
        score += this.props.bonus;
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