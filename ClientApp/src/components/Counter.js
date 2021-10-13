import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
      this.incrementCounter = this.incrementCounter.bind(this);
      this.dec = this.dec.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }

    dec(){
        this.setState({
            currentCount: this.state.currentCount - 1
        });
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            <p>This is a simple example of a React component.</p>
            <p>this is nexe.</p>
             <button className="btn btn-primary" onClick={this.dec}>Multipl</button>
      </div>
    );
  }
}
