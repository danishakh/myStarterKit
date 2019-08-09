import { GET_USERS } from "./types";

// get users from express back-end
export const getUsers = () => dispatch => {
    
    fetch('/api/users')
        .then(res => res.json())
        .then(users => {

            dispatch({
                type: GET_USERS,
                payload: users
            })
        });
};