import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import GlobalData from './GlobalData'
import App from './App';

ReactDOM.render(
<GlobalData>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</GlobalData>, document.getElementById('root'));

