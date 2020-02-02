import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



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





ReactDOM.render(<Container />, document.getElementById('root'));

