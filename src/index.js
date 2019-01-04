import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Button from './Button';
import ButtonInput from './ButtonInput';
import Dropdown from './Dropdown';
import './index.css';

//ReactDOM renders the Component to webpage 'localhost:3000.

ReactDOM.render(<div>
    <Hello />
    <Dropdown />
    <Button />
    <ButtonInput />
    </div>, document.getElementById('root'));


