import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import { robots } from './robots';
// import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <App robots={robots} />

               
                    
                    
, document.getElementById('root'));





registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
