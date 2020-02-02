import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from '../src/Customized/app';




class Car extends React.Component {

  constructor(props){
      super(props);
        this.state = {
            brand: "Ford",
            model:"Mustang",
            color:"red",
            year: 1964
        };
  }

  static getDerivedStateFromProps(props,state){
      return {model: props.newBrand};
  }

  changeColor = () =>{
      this.setState({color:"blue"});
  }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "white" })
        },1000);
    }

    // returning false here, blocks component update once it is rendered. in our case button click does not affect anything
    shouldComponentUpdate(){

        return true;
    }

getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.color;
}

componentDidUpdate(){
    document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.color;
}

  render(){
      return (
          <div>
              <h1>
                  My {this.state.brand}
              </h1>
              <p>
                  It is a {this.state.color}
                  {this.state.model}
                  from {this.state.year}
              </p>
              <button
              type="button"
              onClick = {this.changeColor}>
                  Change color
              </button>

              <div id="div1">
              </div>
              <div id="div2">
              </div>
          </div>
          
      )
  }
}

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    delHeader = () => {
        this.setState({ show: false });
    }

    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child/>;
        }
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}
class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'
                />
            </form>
        );
    }
}

class MyFormWithMultipleInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }

    myChangeHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({ errormessage: err });
        this.setState({[nam]: val});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}

function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(){
    return (
        <FancyBorder color="red">
            <h1 className = "Dialog-title">
                Welcome
            </h1>
            <p className='Dialog-message'>
                Thank you for visiting spacecraft!
            </p>
        </FancyBorder>
    )
}

function Contacts(){
    return <div className="Contacts"/>;
}

function Chat(){
    return <div className="Chat"/>
}

function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function App() {
    return (
        <SplitPane
        left = { <Contacts/>}
        right = { <Chat/>}
        />
    );
}


ReactDOM.render(<SignUp />, document.getElementById('root'));

