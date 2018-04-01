import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './modal.css';
import {inputChanged} from '../../actions';
import InputBox from '../inputBox/inputBox';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.isSaved=false;
        if(!this.props.isUpdated && !this.isSaved){
            this.state = {
                empPropsData:this.props.data,
                isOpen : this.props.isOpen,
                index : this.props.index
            }
        }
    }
    componentWillMount(){
        if(this.props.isUpdated ){
            var updatedInput = this.props.data;
            this.dataArr ={
                name : updatedInput.name,
                email: updatedInput.email,
                city : updatedInput.city,
                phone : updatedInput.phone,
                website : updatedInput.website,
                company : updatedInput.company
            }
        }
        this.inputBoxArray =[];

        Object.keys(this.state.empPropsData).forEach(function(key) {
            this.inputText = this.state.empPropsData[key];
            this.id = key;
            this.inputBoxArray.push(<InputBox value={this.inputText} id ={this.id} key={key} handleOnChange={(e)=>this.storeVal(e)}></InputBox>)
        },this);
        }
    storeVal(e){
        console.log(e)
        var key = e.target.id;
        var value = e.target.value;

        Object.keys(this.state.empPropsData).forEach(function(key) {
            if (key == e.target.id) {
                Object.assign(this.state.empPropsData,{[""+key+""] : e.target.value});
            }
            else{
                console.log(this.state.empPropsData)
            }
        },this);
        console.log(this.state.empPropsData)
    }
    saveData(){
        this.updatedData = {
            empUpdatedVal:this.state.empPropsData,
            index:this.props.index
        }
        this.props.inputChanged(this.updatedData);  //call to action inputChanged
        this.isSaved = true;
        this.close();
    }
    close(){
        this.setState({isOpen:false},
            ()=>{
                this.props.modalState(this.state.isOpen);
            });
        this.isSaved = false;
    }
    render(){
        return(
            <div >
            <div className="modalContainer" id="editModal" role="dialog">
                <div >
                    {this.inputBoxArray}
                </div>
                <div >
                    <br/>
                    <button type="button" className="btnClass saveBtn" onClick={(e)=>this.saveData(e)} style={{padding:'10px' }}>Save</button>
                    <button type="button" className="btnClass" onClick={()=>this.close()}   style={{ padding:'10px'}}>Cancel</button>
                </div>
            </div>
            </div>
        );
    }
}

    function mapDispatchToProps(dispatch){
        return bindActionCreators({
            inputChanged:inputChanged
        },dispatch);
    }
export default connect(null,mapDispatchToProps)(Modal);