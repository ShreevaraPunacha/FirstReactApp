import React from 'react';
import ReactDOM from 'react-dom';

function Dialog(props) {
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}

        </FancyBorder>
    )
}
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}


class SignUpDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = { login: '' }
    }

    render(){
        return(
            <Dialog title="Mars Exploration Program"
                message="How could we refer to you?">

                <input value={this.state.login}
                    onChange={this.handleChange} />

                <button onClick={this.handleSignUp}>
                    Sign Me Up!
        </button>
            </Dialog>
        )
        
    }

    handleChange = (e) =>{
        this.setState({login: e.target.value})
    }

    handleSignUp = () => {
        alert(`Welcome aboard!, ${this.state.login} !`)
    }
}

export default  SignUpDialog;