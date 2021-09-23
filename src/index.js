import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FriendList from './components/friendsList';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(<FriendList />, document.getElementById('root'));

reportWebVitals();
