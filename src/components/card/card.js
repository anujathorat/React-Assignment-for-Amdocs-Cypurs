import React from 'react';
import './card.css';
import ReactDOM from 'react-dom';
import Modal from '../../components/modal/modal';
import {bindActionCreators} from "redux";
import {inputChanged} from "../../actions";
import {connect} from "react-redux";

class Card extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                isOpen : false,
                isUpdated:false,
                name :this.props.data.name,
                email : this.props.data.email,
                city : this.props.data.address.city,
                phone :this.props.data.phone,
                website : this.props.data.website,
                company : this.props.data.company.name
            }
        this.dataArr = {
            name : this.state.name,
            email : this.state.email,
            city :this.state.city,
            phone : this.state.phone,
            website : this.state.website,
            company : this.state.company
        }
        this.empUpdatedVal = {};
    }
    componentWillReceiveProps(){
        console.log("in cards")
        let city = this.props.data.address? this.props.data.address.city : this.props.data.city;
        let company = this.props.data.company.name? this.props.data.company.name : this.props.data.company;
        this.dataArr = {
            name :this.props.data.name,
            email : this.props.data.email,
            city : city,
            phone :this.props.data.phone,
            website : this.props.data.website,
            company : company
        }
        this.setState({
            name :this.props.data.name,
            email : this.props.data.email,
            city : city,
            phone :this.props.data.phone,
            website : this.props.data.website,
            company : company
        })
    }
    openModal(e){
        let openModal = document.getElementById("editModal");
        if(!openModal){
            this.setState({isOpen:true});
        }
    }
    handleClose(data){
        this.setState({isOpen:data});
    }
    render(){
        return(
            <div>
                    <div className="cardContainer col-sm-3 col-md-2 col-lg-5 " onClick={(e) => this.openModal(e)} >

                        <table id="empData">
                            <tr>
                                <th>{this.state.name}</th>
                            </tr>
                            <tr>
                                <td>{this.state.email} </td>
                            </tr>
                            <tr>
                                <td>{this.state.city} </td>
                            </tr>
                            <tr>
                                <td>{this.state.phone} </td>
                            </tr>
                            <tr>
                                <td>{this.state.website} </td>
                            </tr>
                            <tr>
                                <td>{this.state.company} </td>
                            </tr>
                        </table>

                    </div>

                {this.state.isOpen ?
                    <Modal className="modalDisplay" data={this.dataArr} index={this.props.index} isOpen = {this.state.isOpen}  modalState = {(status)=>this.handleClose(status)}></Modal>:
                    null
                }
            </div>
        );
    }
}


export default (Card);
