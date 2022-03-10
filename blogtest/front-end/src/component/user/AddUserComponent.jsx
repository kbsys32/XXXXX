import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id       : '',
            user_pw       : '',
            user_name     : '',
            user_birthdate: '',
            user_gender   : '',
            user_phone    : '',
            user_email    : '',
            user_addr1    : '',
            user_addr2    : '',
            user_category : '',
            message       : null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            user_id       : this.state.user_id,
            user_pw       : this.state.user_pw,
            user_name     : this.state.user_name,
            user_birthdate: this.state.user_birthdate,
            user_gender   : this.state.user_gender,
            user_phone    : this.state.user_phone,
            user_email    : this.state.user_email,
            user_addr1    : this.state.user_addr1,
            user_addr2    : this.state.user_addr2,
            user_category : this.state.user_category,

        }

        ApiService.addUser(user)
            .then(res => {
                this.setState({
                    message: user.user_name + '님이 성공적으로 등록되었습니다.'
                })
                console.log(this.state.message);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            });

    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="please input your user_id" name="user_id"
                               fullWidth margin="normal" value={this.state.user_id} onChange={this.onChange}/>

                    <TextField type="password" placeholder="please input your user_pw" name="user_pw"
                               fullWidth margin="normal" value={this.state.user_pw} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_name" name="user_name"
                               fullWidth margin="normal" value={this.state.user_name} onChange={this.onChange}/>

                    <TextField type="datetime-local" placeholder="please input your user_birthdate" name="user_birthdate"
                               fullWidth margin="normal" value={this.state.user_birthdate} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_gender" name="user_gender"
                               fullWidth margin="normal" value={this.state.user_gender} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_phone" name="user_phone"
                               fullWidth margin="normal" value={this.state.user_phone} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_email" name="user_email"
                               fullWidth margin="normal" value={this.state.user_email} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_addr1 " name="user_addr1"
                               fullWidth margin="normal" value={this.state.user_addr1} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_addr2 " name="user_addr2"
                               fullWidth margin="normal" value={this.state.user_addr2} onChange={this.onChange}/>

                    <TextField type="text" placeholder="please input your user_category" name="user_category"
                               fullWidth margin="normal" value={this.state.user_category} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
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

export default AddUserComponent;