/**
 * Life Cycle Methods
 */

//* componentWillMount
class MyComponent extends Component {
  // Method is called before the render
  componentWillMount() {
    console.log(`Component will mount initialized`);
  }

  render() {
    return <div />;
  }
}

//* componentDidMount
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: 0
    };
  }

  // Method is called after the render
  /**
   * This method is mostly used for API calls
   */
  componentDidMount() {
    //Mimics an API call
    setTimeout(() => {
      this.setState({
        activeUsers: 234
      });
    }, 2000);
  }

  render() {
    return <h1>Active Users: {this.state.activeUsers}</h1>;
  }
}

//* EventListeners
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  componentDidMount() {
    // change code below this line
    document.addEventListener("keydown", this.handleKeyPress);
    // change code above this line
  }
  componentWillUnmount() {
    // change code below this line
    document.removeEventListener("keydown", this.handleKeyPress);
    // change code above this line
  }
  handleEnter() {
    this.setState({
      message: this.state.message + "You pressed the enter key! "
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
