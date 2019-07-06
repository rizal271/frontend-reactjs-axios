import React from 'react';  
import Header from '../../component/HeaderComponent/HeaderComponent';
// import Button from '../../component/ButonComponent/ButtonComponent';
import InputComp from '../../component/InputComponent/InputComponent';
import Button from '../../component/ButonComponent/ButtonComponent';
import TextareaComp from '../../component/TextareaComponent/TextareaComponent';
import swal from 'sweetalert';
import {browserHistory} from "react-router";

import Search from '../../component/SearchComponent/SearchComponent';

import Content from '../Content/Content';
// import FormAll from '../Content/FromAll';
import {Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        forminputBook: {
            title: '',
            created_at: '',
            description: '',
            updated_at: '',
            img_url: ''
        },
        modal: false,
        redirect: false,

        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
        // this.handlesubmit()
    }

    handlechangeforminput = (event) => {
        let forminputbookbaru = {...this.state.forminputBook}
        forminputbookbaru[event.target.name] = event.target.value
        this.setState({
            forminputBook: forminputbookbaru
        })
        
    }
    
    handlesubmit = () => {
        this.dataToAPI()
        swal("Poof! Your imaginary file has been saved!", {
            icon: "success",
                    
        });
        this.toggle()
        browserHistory.push("/");
        // this.getAPI()
    }

    getAPI = () => {
        Axios.get('http://localhost:3336/book')
        .then((res) => {
            this.setState({
                list: res.data.result
            })
        })
    }


    dataToAPI = () =>{
        Axios.post('http://localhost:3336/book', this.state.forminputBook).then((res) =>{
            console.log(res)
        }, (err)=>{
            console.log('errornya: ',err)
        })

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
                <ModalBody>
                <form >
                    <InputComp labelname="URL Image" forlabel="imageURL" inputname="img_url" idinput="imageURL" ubah={this.handlechangeforminput}/>
                    <InputComp labelname="Tilte" forlabel="title" inputname="title" idinput="title" ubah={this.handlechangeforminput}/>
                    <TextareaComp labelname="Description" forlabel="desc" inputname="description" idinput="desc" ubah={this.handlechangeforminput} />
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button clik={this.handlesubmit} class="btn btn-warning" value="Save" />
                    {/* <Button className="btn btn-warning" onClick={this.toggle}>Save</Button> */}
                </ModalFooter>
                
                    {/* <FormAll /> */}
                </Modal>
                </Container>
            </div>
        )
    }
}

export default Home