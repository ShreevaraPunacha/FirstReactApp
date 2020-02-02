import React from 'react';

class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            this.textInput.current.focus();
        }, 1000);
    }

    render() {
        return(
            <input
            type="text"
            ref={this.textInput}
            />
        );
    }
}

export default CustomTextInput;