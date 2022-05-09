import axios from 'axios';
import dummy from './dummy';

const Login = {
    login({ id, password }) {
        const checkUser = dummy?.user?.some((o) => o?.id === id && o?.password === password);
        console.log('localStorage', localStorage, id);
        if (checkUser) {
            localStorage?.setItem('user', id);
        }
        return checkUser;
    },
};

export default Login;
