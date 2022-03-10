import React, {Component} from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users  : [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log('reloadUserList() Error!', err);
            })
    }

    deleteUser = (userID) => {
        ApiService.deleteUser(userID)
            .then(res => {
                this.setState({
                    message: 'User Deleted Successfully.'
                });
                this.setState({
                    users: this.state.users.filter(user =>
                        user.user_id !== userID)
                });
            })
            .catch(err => {
                console.log('deleteUser() Error!', err);
            })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.history.push('/edit-user')

        ;
    }

    addUser = () => {
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    }

    render() {

        return (
            <div>
                <Typography variant="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>user_id</TableCell>
                            <TableCell>user_pw</TableCell>
                            <TableCell align="right">user_name</TableCell>
                            <TableCell align="right">user_birthdate</TableCell>
                            <TableCell align="right">user_gender</TableCell>
                            <TableCell align="right">user_phone</TableCell>
                            <TableCell align="right">user_email</TableCell>
                            <TableCell align="right">user_addr1</TableCell>
                            <TableCell align="right">user_addr2</TableCell>
                            <TableCell align="right">user_category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user =>
                            <TableRow key={user.user_id}>
                                <TableCell component="th" scope="user">{user.user_id}</TableCell>
                                <TableCell align="right">{user.user_pw}</TableCell>
                                <TableCell align="right">{user.user_name}</TableCell>
                                <TableCell align="right">{user.user_birthdate}</TableCell>
                                <TableCell align="right">{user.user_gender}</TableCell>
                                <TableCell align="right">{user.user_phone}</TableCell>
                                <TableCell align="right">{user.user_email}</TableCell>
                                <TableCell align="right">{user.user_addr1}</TableCell>
                                <TableCell align="right">{user.user_addr2}</TableCell>
                                <TableCell align="right">{user.user_category}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(user.user_id)}>
                                    <CreateIcon/>
                                </TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(user.user_id)}>
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );

    }

}

const style = {
    display       : 'flex',
    justifyContent: 'center'
}

export default UserListComponent;