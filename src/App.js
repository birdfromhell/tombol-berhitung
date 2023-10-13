import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  resetCount = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
        <div className="container">
          <button onClick={this.decrementCount} className="button-decrement">-</button>
          <span>{this.state.count}</span>
          <button onClick={this.incrementCount} className="button-increment">+</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
    );
  }
}

export default App;