//* Example 1
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
  }
  // add handleChange() and submitMessage() methods here
  handleChange = () => {

  }

  submitMessage = () => {
    
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input type="text" />
        <button value="send"/>
        <ul>
          {"code goes here"}
        </ul>
      </div>
    );
  }
}

//* Example 2
// Redux Code:
//==========================Action Type(s)===================================//
const ADD = 'ADD';
//===========================================================================//

//=============================Actions=======================================//
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};
//===========================================================================//

//============================Reducer(s)=====================================//
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
//===========================================================================//

// Store
const store = Redux.createStore(messageReducer);
//===========================================================================//

// React Code:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
    render() {
        return(
            <Provider>
                <DisplayMessages />
            </Provider>
        )
    }
  // change code above this line
};