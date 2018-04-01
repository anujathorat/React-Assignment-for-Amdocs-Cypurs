import React from 'react';
import './inputBox.css';

class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inputBoxVal:""
        }
    }
    componentWillMount(){
        this.setState({inputBoxVal:this.props.value});
    }
    handleChange(data){
        this.setState({inputBoxVal:data});
        this.props.handleOnChange(data);  // call to props handleOnChange to pass data to parent
    }
    render(){
        this.label = this.props.id.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        if(this.props.value){
            var inputBoxVal = this.props.value;
        }else{
            var inputBoxVal = this.state.inputBoxVal;
        }
        return(
            <div>
                <label className="labelCls">{this.label}</label><input className="inputCls" defaultValue={inputBoxVal} id={this.props.id} type="text" onChange ={(e)=>this.handleChange(e)}></input>
            </div>
        );
    }
}

export default InputBox;