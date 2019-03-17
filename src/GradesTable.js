import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {GradeSelector, SubjectSelector} from './Selects'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});




class SimpleTable extends React.Component {
    constructor(props) {
        super(props);

        this.id = 0;
        this.rows = [
            this.createData('Language 1', 1),
            this.createData('Language 2', 2),
            this.createData('Humanities', 3),
            this.createData('Science', 4),
            this.createData('Mathematics', 5),
            this.createData(<SubjectSelector change6={this.change6}/>, 6)
        ];
        this.changeGrade = this.changeGrade.bind(this);

    }

    createData(subject, group) {
        this.id += 1;
        return {
            id: this.id,
            sub: subject,
            y1s2: <GradeSelector changeGrade={this.changeGrade} subject={group} year={1} sem={2} />,
            y1s1: <GradeSelector changeGrade={this.changeGrade} subject={group} year={1} sem={1} />,
            y2s1: <GradeSelector changeGrade={this.changeGrade} subject={group} year={2} sem={1} />,
            y2s2: <GradeSelector changeGrade={this.changeGrade} subject={group} year={2} sem={2} />,
            final: <GradeSelector changeGrade={this.changeGrade} subject={group} year={3} sem={1} />,
        };
    }

    change6 = change => {
        this.setState({
            type6: change,
        });
        this.props.changeType6(change);
    };

    changeGrade = (value, subject, yearsem) => {
        let change = {...this.state[subject]};
        change[yearsem] = value;
        console.log(change);
        this.setState({
            [subject]: change,
        }, () => {console.log(this.state)});
        this.updateSuper(subject, change);
        if(yearsem === "y3s1") {
            this.updateSuperFinal(subject, value);
        }
    };

    updateSuperFinal = (subject, newFinal) => {
        this.props.changeFinalGrade(newFinal, subject);
    };
    
    updateSuper = (subject, newGrades) => {
        let average = Number(newGrades.y1s1);
        average += Number(newGrades.y1s2);
        average += Number(newGrades.y2s1);
        average += Number(newGrades.y2s2);
        average += Number(newGrades.y3s1);
        average = average/5;
        this.props.changeGrade(average, subject);
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell align="right">IB1 Sem 1</TableCell>
                            <TableCell align="right">IB1 Sem 2</TableCell>
                            <TableCell align="right">IB2 Sem 1</TableCell>
                            <TableCell align="right">IB2 Sem 2</TableCell>
                            <TableCell align="right">Final Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.sub}
                                </TableCell>
                                <TableCell align="right">{row.y1s1}</TableCell>
                                <TableCell align="right">{row.y1s2}</TableCell>
                                <TableCell align="right">{row.y2s1}</TableCell>
                                <TableCell align="right">{row.y2s2}</TableCell>
                                <TableCell align="right">{row.final}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);