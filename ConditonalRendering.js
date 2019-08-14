// * If/Else Condition (Conditional Rendering)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }

  /**
   * Cleaner Version
   */
  render() {
    // change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}

//* Using ternary
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      input: "",
      age: 0
    };
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ""
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.age > 18 ? buttonThree : (buttonTwo, buttonOne)}
      </div>
    );
  }
}

/**
 * Game of Chance
 */

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You won!" : "You lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // Tries counter
    });
  }
  render() {
    let expression = Math.floor(Math.random() * Math.floor(2)); // <- random number 1 or 0
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* change code below this line */}
        <Results fiftyFifty={expression} />
        {/* change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
