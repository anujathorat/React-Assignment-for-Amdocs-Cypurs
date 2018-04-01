import React from 'react';
import './displayInfo.css';
import Card from "../../components/card/card";
import data from '../../customData.json';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {inputInitialData} from "../../actions";

class DisplayInfo extends React.Component{
    constructor(props){
        super(props);
        this.dataArr =data;
        this.state = {
             empData:this.props.customCardDataReducer
        }
    }
    componentWillMount(){
        this.inputData = this.props.customCardDataReducer;
        this.props.inputInitialData(this.inputData);
    }
    componentWillReceiveProps(nextProp,props){
        if(nextProp.initData === this.props.initData){
            console.log("1 st loop")
            console.log("same props")
        }
        if(nextProp.inputValue) {
            console.log("2nd loop")
            let index = parseInt(nextProp.inputValue.index);
            if(nextProp.inputValue.empUpdatedVal !== this.props.initData[index]){
                console.log("different")
                this.props.initData.map((item, i) => {
                    if (i == index) {
                        this.props.initData[index] = nextProp.inputValue.empUpdatedVal;
                    }
                    console.log(this.props.initData)
                }, this);
                this.props.inputInitialData(this.props.initData);
            }
        }
    }

    render(){
        return(
            <div className="row cardBg">
            <div className="text-center col-lg-12 col-md-12 col-xs-12">
                {
                    Object
                        .keys(this.props.initData)
                        .map(key => <Card key={key} index={key} data={this.props.initData[key]} />,this)
                }
            </div>
        </div>
            );
    }
}


function mapStateToProps(state){
    return {
        customCardDataReducer: state.customCardDataReducer,
        inputValue : state.inputValue,                       //local variable of props update
        initData: state.initData
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        inputInitialData:inputInitialData
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayInfo);
