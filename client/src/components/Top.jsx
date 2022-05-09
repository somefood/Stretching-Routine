import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
    const navigate = useNavigate();

    const [userState, setUserState] = useState();

    useEffect(() => {
        console.log('localStorage,0', localStorage.getItem('user'), userState);
        localStorage.getItem('user');
        if (!!localStorage.getItem('user')) {
            setUserState(true);
        } else {
            setUserState(false);
        }
    }, []);

    return (
        <Fragment>
            <div>나는 탑이야</div>
            <div
                onClick={() => {
                    if (!!userState) {
                        localStorage?.removeItem('user');
                    } else {
                        navigate('/');
                    }
                    setUserState(false);
                    console.log('localStorage,0', localStorage);
                }}
            >
                {!!userState ? '로그아웃' : '로그인'}
            </div>
        </Fragment>
    );
};

export default Top;
