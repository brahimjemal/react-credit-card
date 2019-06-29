import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      date: ''
    }
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  changeNumber = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  changeDate = (event) => {
    this.setState({
      date: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="card">
          <h1 style={{ color: 'white' }}>master card </h1>
          <h1 style={{ height: 40, width: 400 }}> {this.state.name.toUpperCase()} </h1>
          <h2 style={{ height: 40, width: 400 }}> {this.state.number}</h2> 
          <h2 style={{ height: 40, width: 400 }}> {this.state.date}</h2>
          <div className="deep"><img className="lol" src="https://img.bfmtv.com/c/630/420/576/fe57f1a905126fdcb0bfafe447b3f.png"></img></div>

        </div>
        <div className="form" >
          <h1> client form </h1>
          <input value={this.state.name} onChange={this.changeName} type="text" placeholder="Type here your name " style={{ height: 40, width: 400 }} />
          <input value={ this.state.number} onChange={this.changeNumber} type="password" placeholder="Type here your card number " style={{ height: 40, width: 400 }} />
          <input value={ this.state.date} onChange={this.changeDate} type="text" placeholder="Type here the expire date  " style={{ height: 40, width: 400 }} />
        </div>
      </div>

    );
  }
}


export default App;
