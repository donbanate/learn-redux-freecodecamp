/**
 * Life Cycle Methods
 */

//* ComponentWillMount
class MyComponent extends Component {
  // Method is called before the render
  componentWillMount() {
    console.log(`Component will mount initialized`);
  }

  render() {
    return <div />;
  }
}
