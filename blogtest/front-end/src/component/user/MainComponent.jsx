import React, {Component} from 'react';
import ApiService from "../../ApiService";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id : ''
        }
    }

        enterMain = () => {
            this.props.history.push('/users');

    }


    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Main</Typography>

                <Button variant="contained" color="primary" onClick={this.enterMain}>Enter</Button>

            </div>
        );
    }
}

const formContainer = {
    display : 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display       : 'flex',
    justifyContent: 'center'
}

export default MainComponent;