import React, { Component } from 'react';
import './User.css';

import { connect } from "react-redux";
import { getUsers } from '../../actions/userActions';

class User extends Component {

    componentDidMount() {
        // redux action
        this.props.getUsers();
    }


    render() {
        //console.log(this.props.users);
        
        return (
            <div className='users-list'>
                <h2>Users</h2>
                <ul>
                    {this.props.users.map(user => 
                        <li key={user.id}>{user.firstname} {user.lastname}</li>    
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items
});


export default connect(mapStateToProps, { getUsers })(User);
