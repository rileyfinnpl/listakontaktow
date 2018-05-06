import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ContactView from "./ContactView";

ReactDOM.render(
    <ContactView/>,
    document.getElementById('root')
);
registerServiceWorker();
