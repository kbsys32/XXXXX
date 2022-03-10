import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id       : '',
            user_pw : '',
            user_name: '',
            user_birthdate : '',
            user_gender      : '',
            user_phone   : '',
            user_email   : '',
            user_addr1   : '',
            user_addr2   : '',
            user_category   : '',
            message  : null
        }
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
            .then(res => {
                let user = res.data;
                this.setState({
                    user_id       : user.user_id,
                    user_pw : user.user_pw,
                    user_name: user.user_name,
                    user_birthdate : user.user_birthdate,
                    user_gender      : user.user_gender,
                    user_phone   : user.user_phone,
                    user_email   : user.user_email,
                    user_addr1   : user.user_addr1,
                    user_addr2   : user.user_addr2,
                    user_category   : user.user_category,
                    user_joindate : user.user_joindate


                })
            })
            .catch(err => {
                console.log('loadUser() 에러', err);
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            user_id       : this.state.user_id,
            user_pw       : this.state.user_pw,
            user_name       : this.state.user_name,
            user_birthdate       : this.state.user_birthdate,
            user_gender       : this.state.user_gender,
            user_phone       : this.state.user_phone,
            user_email       : this.state.user_email,
            user_addr1       : this.state.user_addr1,
            user_addr2       : this.state.user_addr2,
            user_category       : this.state.user_category,
            user_joindate : this.state.user_joindate
        }

        ApiService.editUser(user)
            .then(res => {
                this.setState({
                    message: user.user_name + '님 정보가 수정되었습니다.'
                })
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                    <TextField type="text" name="user_id" readOnly={true}
                               fullWidth margin="normal" value={this.state.user_id}/>

                    <TextField type="password" placeholder="Edit your user_pw " name="user_pw"
                               fullWidth margin="normal" value={this.state.user_pw} onChange={this.onChange}/>

                    <TextField tyep ="text" placeholder="Edit your user_name " name="user_name"
                               fullWidth margin="normal" value={this.state.user_name} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Edit your user_addr1" name="user_addr1"
                               fullWidth margin="normal" value={this.state.user_addr1} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Edit your user_addr2" name="user_addr2"
                               fullWidth margin="normal" value={this.state.user_addr2} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const style = {
    display       : 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;