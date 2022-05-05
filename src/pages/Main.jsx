import { Fragment } from 'react';
import Top from '../components/Top';
import Main from '../components/Main';
import Bottom from '../components/Bottom';


const MainPage = () => {
    return (
        <Fragment>
            <Top />
            <Main />
            <Bottom />
        </Fragment>
    )
};

export default MainPage;