import React from 'react';

// Created following guidance from https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html
class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div>
        <h2>This is a basic dropdown demonstration with links to team pages</h2>
        <div  className="dropdown" style = {{background:"grey",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> I'm a React Dropdown </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" style={{display: "table-cell"}} href="https://www.skatelescope.org/"target="_blank">SKA Telescope Webpage</a></li> 
         <li><a style={{display: "table-cell"}}href="https://jira.skatelescope.org/projects/AT2/summary" target="_blank">Jira Ticket AT2-33</a></li>
         <li><a style={{display: "table-cell"}}href="https://confluence.skatelescope.org/pages/viewpage.action?spaceKey=SE&title=OSO-UI+Team" target="_blank">OSO-UI team Homepage</a></li>
         <li><a style={{display: "table-cell"}}href="https://github.com/UManRalph/RalphReactTraining" target="_blank" > Ralph's GitHub training repository </a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
       </div>

    );
  }
}

export default Dropdown;