import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {TextField, Typography} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";


const styles = {

};

class ChoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            g1: null,
            g2: null,
            g3: null,
            g4: null,
            g5: null,
            g6: null,
            bonus: 0,
            totalWeight: null,
        };
    }

    preset = choice => {};

    changeSubWeight(newWeight, group) {}

    changeTotalWeight(newWeight) {}

    changeBonus(newBonus) {}

    render() {

        return (
            <div>
                <Typography variant="overline">Presets: </Typography>
                <Button onClick={() => this.preset("mw")}>Maschinenwesen</Button>
                <Button onClick={() => this.preset("es")}>Engineering Science</Button>
                <Typography variant="overline">Options: </Typography>
                <Table>
                    <tbody>
                    <TableRow>
                        <TableCell><Typography>Group 1</Typography></TableCell>
                        <TableCell><TextField value={this.state.g1} onChange={(event) => this.changeSubWeight(event.target.value, 1)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Group 2</Typography></TableCell>
                        <TableCell><TextField value={this.state.g2} onChange={(event) => this.changeSubWeight(event.target.value, 2)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Group 3</Typography></TableCell>
                        <TableCell><TextField value={this.state.g3} onChange={(event) => this.changeSubWeight(event.target.value, 3)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Group 4</Typography></TableCell>
                        <TableCell><TextField value={this.state.g4} onChange={(event) => this.changeSubWeight(event.target.value, 4)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Group 5</Typography></TableCell>
                        <TableCell><TextField value={this.state.g5} onChange={(event) => this.changeSubWeight(event.target.value, 5)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Group 6</Typography></TableCell>
                        <TableCell><TextField value={this.state.g6} onChange={(event) => this.changeSubWeight(event.target.value, 6)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Weight of HZB Final</Typography></TableCell>
                        <TableCell><TextField value={this.state.totalWeight} onChange={(event) => this.changeTotalWeight(event.target.value)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography>Bonus Points</Typography></TableCell>
                        <TableCell><TextField value={this.state.bonus} onChange={(event) => this.changeBonus(event.target.value)}/></TableCell>
                    </TableRow>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default withStyles(styles) (ChoiceForm);