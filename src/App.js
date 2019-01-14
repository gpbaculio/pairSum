import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    numbers: [],
    equals: 0
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { numbers, equals } = this.state;
    const splitNums = numbers.split(',').map(n => Number(n));
    const results = [];
    splitNums.forEach((i, idx) => {
      splitNums
        .filter(c => c !== i)
        .forEach(x => {
          const result = i + x;
          console.log('result = ', result);
          results.push(result);
        });
    });
    if (results.includes(Number(equals))) {
      alert('Pair Sum correct');
    } else {
      alert('No pair');
    }
  };

  render() {
    const { numbers, equals } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Numbers
            <input
              type="text"
              id="numbers"
              name="numbers"
              value={numbers}
              onChange={this.onChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Equals
            <input
              type="number"
              id="equals"
              name="equals"
              value={equals}
              onChange={this.onChange}
            />
          </label>
        </div>

        <button
          disabled={!numbers || !equals}
          type="submit"
          color="primary"
          className="btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
