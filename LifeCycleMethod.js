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

//* Component will receive props
// Managing Props
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }
  

  componentDidUpdate() {
    console.log('Component updated');
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
