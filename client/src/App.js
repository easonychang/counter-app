import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 4, name: "", imageUrl:""},
        { id: 2, value: 0, name: "", imageUrl:""},
        { id: 3, value: 0, name: "", imageUrl:""},
        { id: 4, value: 0, name: "", imageUrl:""}
    ],
    data: null
  };

  constructor(){
    super();
    console.log("App - Constructor");

    //this.state = this.props.something;

  }

  // handling fetching of pokemons
  handleAPICall = res => {
    const counters = [...this.state.counters];
    console.log(res);
    for(let i = 0, j = 0; i < counters.length, j < res.length; i++, j++){
      counters[i].name = res[j].name;
      counters[i].imageUrl = res[j].imageUrl;
    }
    this.setState({ counters });
  }

  componentDidMount() {

    this.callBackendAPI()
      .then(res => this.handleAPICall(res))
      .catch(err => console.log(err));
    console.log("App - Mounted");
  }

  callBackendAPI = async () => {
    const response = await fetch('/pokemon');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

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

  handleGenerateNew = () => {
    this.callBackendAPI()
      .then(res => this.handleAPICall(res))
      .catch(err => console.log(err));
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
            onDelete={this.handleDelete}
            onGenerateNew={this.handleGenerateNew} />
        </main>
        <p className="App-intro">{this.state.data}</p>
      </React.Fragment>
    );
  }
}

export default App;
