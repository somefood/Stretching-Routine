import { Fragment, useEffect, useState } from 'react';
import { 처음로딩 } from './api/index';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routePage from './router/router';

function App() {
    const [로딩, 셋로딩] = useState(false);

    const 로딩증 = async () => {
        const result = await 처음로딩();
        if (!!result) 셋로딩(true);
    };

    useEffect(() => {
        로딩증();
    }, [로딩]);

    return (
        <BrowserRouter>
            <Routes>
                {routePage.map(({ pathName, component }) => (
                    <Route path={pathName} element={component} key={pathName} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
