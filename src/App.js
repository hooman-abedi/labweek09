import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

// App keeps the lab information in its state object
// and passes it down to the Welcome component as props.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to Fullstack Development - I',
      subtitle: 'React JS Programming Week09 Lab exercise',
      studentId: '101570367',
      studentName: 'Hooman Abedi',
      college: 'George Brown College, Toronto',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome
            title={this.state.title}
            subtitle={this.state.subtitle}
            studentId={this.state.studentId}
            studentName={this.state.studentName}
            college={this.state.college}
          />
        </header>
      </div>
    );
  }
}

export default App;
