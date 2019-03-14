import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

let id = 0;
function createData(subject, y1s1, y1s2, y2s1, y2s2, final) {
    id += 1;
    return { id, subject, y1s1, y1s2, y2s1, y2s2, final };
}

const rows = [
    createData('Language 1', 6, 6, 5, 6, 6),
    createData('Language 2', 6, 6, 5, 6, 6),
    createData('Humanities', 6, 6, 5, 6, 6),
    createData('Science', 6, 6, 5, 6, 6),
    createData('Mathematics', 6, 6, 5, 6, 6),
    createData('Group 6', 6, 6, 5, 6, 6),

];

class SimpleTable extends React.Component {
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
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
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