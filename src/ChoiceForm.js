import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const styles = {

};

class ChoiceForm extends React.Component {
    constructor(props) {
        super(props);
    }

    preset = choice => {};

    render() {

        return (
            <div>
                <Button>Maschinenwesen</Button>
                <Button>Engineering Science</Button>
                <br/>
            </div>
        )
    }
}

export default withStyles(styles) (ChoiceForm);