/**
 * React Components
 */

// Funtional/Stateless component
const MyFunctionlComponent = () => {
  return (
    <div>
      <p>I am a Stateless Component</p>
    </div>
  );
};

// Class/Stateful Component
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am a Stateful component</h1>
      </div>
    );
  }
}

/**
 * Create a Component with Composition
 */

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* change code below this line */}
        <ChildComponent />
        {/* change code above this line */}
      </div>
    );
  }
}

/**
 * Render Nested Components
 */
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit /> // child component of Fruits
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits /> 
      </div>
    );
  }
}

class MyComponent extends React.Component { 
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
