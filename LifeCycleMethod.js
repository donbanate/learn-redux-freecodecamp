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
    }
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
     })
   }, 2000);
  }

  render() {
    return <h1>Active Users: {this.state.activeUsers}</h1>;
  }
}
