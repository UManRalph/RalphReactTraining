import React from 'react';
//This was written after working through the Buttons tutorial of the Codecademy ReactJS Part 1 course.
//This class draws a button on screen and puts some text in it.  This class gets exported to index.js for rendering.

class Button extends React.Component{
    render(){
        return (
        <div>
                <h2>These are "onClick" buttons, but do not link to anything</h2>
            <div>
                <button className='Incrementer' onClick={this.props.talk}> Increment </button>
            </div>
          
            <div>
              <button className='Decrementer' onClick={this.props.talk}> Decrement </button>
            </div>

            <div>
              <button className='Multiplier' onClick={this.props.talk}> Multiply </button>
            </div>

        </div>
          );
    }
};
export default Button;