/**
 *
 * @param Props
 */

// Props/prop is value that can be passed from other component

/**
 ** Example 1
 */

const Color = props => {
  return (
    <div>
      <h1>{props.color}</h1>
    </div>
  );
};

class SampleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Color color="red" /> // Will show h1 element with "red" text inside
      </div>
    );
  }
}

/**
 * 
 * @param PropTypes
 */

 /**
  ** Example 1
  */
const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

/**
 ** Example 2
 */
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword="12345678"/>
          { /* change code above this line */ }
        </div>
    );
  }
};

/**
 ** Example 3
 */
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"Lyndon"}/>
      </div>
    );
  }
};
// change code below this line
const Camper = (props) => {
  return(
    <div>
      <p>{props.name}</p>
    </div>
  );
}

// Set a default props
Camper.defaultProps = {
  name: 'CamperBot'
}

// Checking the prop type
Camper.propTypes = {
  name: PropTypes.string.isRequired
}