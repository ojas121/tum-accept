import React from 'react';
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MenuItem, Select} from "@material-ui/core";

class GradeSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    onChange = (change) => {

        let newGrade = change.target.value;
        this.props.changeGrade(newGrade, this.props.subject, "y" + this.props.year + "s" + this.props.sem);
        this.setState({value: newGrade});
    };


    render() {
        return (<TextField value={this.state.value}
                           onChange={this.onChange}
                           margin="normal" />);
    }
}

class SubjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: "Arts",
        };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
        this.props.change6(event.target.value);
    };

    render() {
        return(<div>
            <Select value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={"Arts"}>Arts</MenuItem>
                <MenuItem value={"Humanities"}>Humanities</MenuItem>
                <MenuItem value={"Science"}>Science</MenuItem>
            </Select>
        </div>);
    }

}

export {GradeSelector, SubjectSelector};