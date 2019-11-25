import ajax from 'ajax';

const url = 'http://localhost:3001/users';

export const registerUser = (name, password) => {
    ajax.post(url, {name, password});
}