import React from 'react';
// Created following guidance from https://www.youtube.com/watch?v=UK0WlRXrfsI "Atomic Jolt"
class ButtonInput extends React.Component {
  
    constructor(){
      super();
      this.state = {
          text: "......" //this is a default placeholder. It will be replaced upon first button press
      };
    }

  clicked(){
      this.setState({text: this.refs.textBox.value });
    }
    render(){

        return( 
        <div>
            <h2>This demonstrates entering some text into a box, then following a button press it is reprinted  on screen</h2>
            <p>Type some text in the box, then click on the button. The text will be copied below.</p>
            <div>
             
            </div>
            <div>
                <input ref="textBox" type ="text" />
            </div>
                <button onClick={ (e) =>{this.clicked();}}> Press to Copy text to below </button>
                <div>
                {this.state.text}
                </div>
        </div>
        );
    }
};
export default ButtonInput;