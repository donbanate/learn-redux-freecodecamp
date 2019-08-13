/**
 ** State
 */

/**
 ** Example 1
 * Define a state in contructor
 * You must use a class component to use a state
 */
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: "Don"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

/**
 ** Example 2
 *Render State in the User Interface
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp"
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        {/* change code below this line */}
        <h1>{name}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}

/**
 ** Example 3
 * Set State with this.setState
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // Updates the state when button is clicked
  handleClick() {
    this.setState({
      name: "React Rocks!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

/**
 ** Example 3
 * Using bind()
 * In latest React version you can use arrow function so can disregard using bind
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <button onClick={this.addItem}>Click Me</button>
        {/* change code above this line */}
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
}

/**
 ** Example 4
 * Toggle element visibility
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

/**
 ** Example 5
 * Simple Counter
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.incrrement.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

/**
 ** Controlled Input
 */
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // change code above this line
  render() {
    return (
      <div>
        {/* change code below this line */}
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        {/* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
