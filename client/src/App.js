import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 4, name: "", imageUrl:""},
        { id: 2, value: 0, name: "", imageUrl:""},
        { id: 3, value: 0, name: "", imageUrl:""},
        { id: 4, value: 0, name: "", imageUrl:""}
    ]
  };

  constructor(){
    super();
    console.log("App - Constructor");

    //this.state = this.props.something;

  }

  componentDidMount() {
    //Ajax Call
    //this.setState({ });
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
      //console.log(counter);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters })
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters })
  };

  handleDelete = (counterId) => {
      //console.log("Event Hadnler Called", counterId);
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value > 0).length}></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
