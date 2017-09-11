import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componments/App';
import 'antd/dist/antd.css';
import {Router,Route,hashHistory} from 'react-router';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <div>
    <App/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
