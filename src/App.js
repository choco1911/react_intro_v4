import React, { Component } from 'react';


const Pets = (props) => {
    return React.createElement("div", {}, [
            React.createElement('h3', {}, props.name),
            React.createElement('h3', {}, props.animal),
            React.createElement('h3', { onClick: props.action }, props.bread)
    ])
}

// it looks like we instanting Pet object from App class
class App extends Component {
  handleTitleClick() {
     alert("you clicked the title")
  }
  render() {
    //return React.createElement('h1', {onClick: this.handleTitleClick}, [
    return React.createElement('h1', {}, [
        React.createElement(Pets, { name: "Luna", animal: "dog", bread: "Havanese", action: null }),
        React.createElement(Pets, { name: "Messy", animal: "dog", bread: "Pudel", action: this.handleTitleClick }),
        React.createElement(Pets, { name: "Mimi", animal: "cat", bread: "Hav", action: null })
    ])
  }
}

export default App;
