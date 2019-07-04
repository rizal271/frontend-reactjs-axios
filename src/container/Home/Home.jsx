import React from 'react';
import Header from '../../component/HeaderComponent/HeaderComponent';
import Button from '../../component/ButonComponent/ButtonComponent';
import Search from '../../component/SearchComponent/SearchComponent';
import Content from '../Content/Content';
import FormAll from '../Content/FromAll';
import {Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    render(){
        return(
            <div>
                <Header />
                <Container>
                <Search />
                <div className="row">
                    <div className="col-md-2 offset-md-8 mt-3">
                    <input type="Button" onClick={this.toggle} className="btn btn-warning" value="ADD"/>
                    </div>
                </div>
                <div className="row mt-5">
                    <Content />
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
                    <FormAll />
                </Modal>
                </Container>
            </div>
        )
    }
}

export default Home