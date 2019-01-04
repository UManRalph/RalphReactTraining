import React from 'react';

//First steps...create a Hello World.  This class gets exported to index.js for rendering.
class Hello extends React.Component{
    render(){
        return(React.createElement('h1', { className: 'greeting' }, 'OSO-UI AT2 33 Demo'))
    }
};
export default Hello;