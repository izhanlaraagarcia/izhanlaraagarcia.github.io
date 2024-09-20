import React, {useState} from "react";

class testMenu extends React.Component{
    state = {
        open: false
    }
    handleClck = () => 
        this.setState({open: !this.state.opne});
}

render(){
    const {open} = this.state;
    return(
        <div className="link">
        <span onClick={this.handleClick}>Click Me</span>
      <div className={`menu ${open ? 'open' : ''}`}>
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
      </div>
      </div>  
    )
}